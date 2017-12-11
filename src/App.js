import React, { Component } from 'react'

import { Router, Route, Switch, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Auth from './Auth/Auth'
import DemoPanel from './DemoPanel'

const history = createHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div style={{ height: '100%' }}>
          <ul>
            <li><Link to="/">Auth</Link></li>
            <li><Link to="/panel">Panel</Link></li>
          </ul>

          <hr />

          <Switch>
            <Route path="/" exact component={Auth} />
            <Route path="/panel" exact component={DemoPanel} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
