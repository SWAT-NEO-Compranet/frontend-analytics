import React, { useState } from 'react'
import {
  Switch,
  Route,
  withRouter,
  useHistory,
  Redirect
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
    loading: true,
    loadPag: false,
    error: null
  })

  const handleSearch = (url, paging) => {
    if (paging === true) {
      setState({
        ...state,
        loadPag: true
      })
    } else {
      setState({
        ...state,
        loadPag: true,
        loading: true
      })
    }

    fetch(url, {
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
      .then(({ dependence }) => setState({
        ...state,
        search: dependence,
        loading: false,
        loadPag: false,
        error: null
      }))
      .catch(e => {
        console.error(e)
        setState({
          ...state,
          loading: false,
          loadPag: false,
          error: 'ha habido un error al cargar la data'
        })
      })
    history.push('/dashboard')
  }

  return (

      <Switch>
          <Route exact path="/">
            <Home>
              <Form
                handleSearch={handleSearch}
                setState={setState}
                state={state}
              />
            </Home>
          </Route>
          <Route exact path="/results/:id" component={Results} />
          {
            (state.dependence !== null)
              ? <Route exact path="/dashboard">
                  <Dashboard setState={setState} state={state}>
                    <ChartDashboard state={state} />
                    <CardDashboard
                      cards={state.search}
                      loadPag={state.loadPag}
                      handleSearch={handleSearch}
                      error={state.error}
                    />
                  </Dashboard>
                </Route>
              : <Redirect to="/" />
          }

      </Switch>

  )
}

App.propTypes = {
  history: PropTypes.object
}

export default withRouter(App)
