import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './containers/Home'
import Form from './components/Form'
import Dashboard from './containers/Dashboard'
import Results from './containers/Results'
import ChartDashboard from './components/chartsDashboard'
import CardDashboard from './components/cardsDashboard'
import PropTypes from 'prop-types'

function App () {
  // const history = useHistory()

  const [state, setState] = useState({
    search: null,
    dependence: null
  })

  const handleSearch = (e, history) => {
    e.preventDefault()
    fetch('https://neo-analytics-backend.herokuapp.com/api/dependencies/details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: state.dependence
      })
    })
      .then(res => res.json())
      // .then(data => setState({ ...state, search: data }))
      // .then(data => console.log(data.dependence.name))
      .then(({ dependence }) => setState({ ...state, search: dependence }))
    console.log(state.search?.acronyms)

    // history.push('/dashboard')
  }

  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home>
              <Form handleSearch={handleSearch} setState={setState} state={state} />
              <p>{state.search?.acronyms}</p>
            </Home>
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard>
              <ChartDashboard state={state.search} />
              <CardDashboard />
            </Dashboard>
          </Route>

      </Switch>

    </Router>
  )
}

App.propTypes = {
  history: PropTypes.object
}

export default App
