import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import Results from './containers/Results'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/dashboard" component={Home}/>
        <Route exact path="/results" component={Results}/>
      </Switch>
    </Router>
  );
}

export default App;
