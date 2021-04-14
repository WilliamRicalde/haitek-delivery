import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from './App'
import { About } from './pages/about'

import './styles/index.css'

function Index () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <App />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
)
