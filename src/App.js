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
// import Result from './components/Result'
import PropTypes from 'prop-types'

function App () {
  const history = useHistory()

  const [state, setState] = useState({
    dependence: null,
    interval: null,
    search: null,
    loading: true
  })

  const handleSearch = (e) => {
    e.preventDefault()

    setState({ loading: true })

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
      .then(({ dependence }) => setState({ ...state, search: dependence, loading: false }))
    history.push('/dashboard')
  }

  return (

      <Switch>
          <Route exact path="/">
            <Home>
              <Form handleSearch={handleSearch} setState={setState} state={state} />
            </Home>
          </Route>
          <Route exact path="/results/:id" component={Results} />
          <Route exact path="/dashboard">
            <Dashboard>
              {/* <Result dependence={state.dependence} interval={state.interval} /> */}
              <ChartDashboard state={state} />
              <CardDashboard cards={state.search} loading={state.loading} />
            </Dashboard>
          </Route>

      </Switch>

  )
}

App.propTypes = {
  history: PropTypes.object
}

export default withRouter(App)
