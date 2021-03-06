import React, { useState } from 'react'
import {
  Switch,
  Route,
  withRouter,
  useHistory
} from 'react-router-dom'
import Home from './containers/Home'
import Form from './components/Form'
import Dashboard from './containers/Dashboard'
import Results from './containers/Results'
import ChartDashboard from './components/chartsDashboard'
import CardDashboard from './components/cardsDashboard'
import PropTypes from 'prop-types'

function App () {
  const history = useHistory()

  const [state, setState] = useState({
    dependence: null,
    interval: null,
    search: null
  })

  const handleSearch = (e) => {
    e.preventDefault()
    fetch('https://neo-analytics-backend.herokuapp.com/api/dependencies/details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: state.dependence,
        interval: state.interval
      })
    })
      .then(res => res.json())
      // .then(data => setState({ ...state, search: data }))
      // .then(data => console.log(data.dependence.name))
      .then(({ dependence }) => setState({ ...state, search: dependence }))

    history.push('/dashboard')
  }

  return (

      <Switch>
          <Route exact path="/">
            <Home>
              <Form handleSearch={handleSearch} setState={setState} state={state} />
            </Home>
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard>
              <ChartDashboard state={state.search} />
              <CardDashboard cards={state.search} />
            </Dashboard>
          </Route>

      </Switch>

  )
}

App.propTypes = {
  history: PropTypes.object
}

export default withRouter(App)
