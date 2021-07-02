import { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import { userContext } from '../context/authContext'
import { onAuthStateChange } from '../services/auth'
import PrivateRoute from './PrivateRoute'
import Feed from '../pages/Feed'

export const AppRouter = () => {
  const { user, dispatch } = useContext(userContext)

  useEffect(async () => {
    onAuthStateChange(dispatch)
  }, [user?.name])

  const isLogged = user?.logged

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <PrivateRoute isLogged={isLogged} component={Feed} path='/feed' />
      </Switch>
    </Router>
  )
}
