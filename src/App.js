import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import { About } from './pages/About'
import { UserAuthProvider } from './context/authContext'

import './styles/index.css'

function App () {
  return (
    <UserAuthProvider>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
        </Switch>
      </Router>
    </UserAuthProvider>
  )
}

export default App
