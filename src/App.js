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
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'

function App () {
  const history = useHistory()

  const [isLoading, setIsLoading] = useState(false)

  const [state, setState] = useState({
    dependence: null,
    interval: null,
    search: null
  })

  const handleSearch = (e) => {
    e.preventDefault()
    setIsLoading(true)

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
      .then(({ dependence }) => setState({ ...state, search: dependence }))
    setIsLoading(false)
    history.push('/dashboard')
  }

  return (

      <Switch>
          <Route exact path="/">
            <Home>
              <Form handleSearch={handleSearch} setState={setState} state={state} />
              { isLoading &&
                <Loader className="Loader"
                  type="Grid"
                  color="#6900C6"
                  height={100}
                  width={100}
                  />
              }
            </Home>
          </Route>
          <Route exact path="/results/:id" component={Results} />
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
