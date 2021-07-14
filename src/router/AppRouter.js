import { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { userContext } from '../context/authContext'
import Home from '../pages/Home'
import Feed from '../pages/Feed'
import PrivateRoute from './PrivateRoute'

export const AppRouter = () => {
  const { user } = useContext(userContext)

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute
          path='/feed'
          component={Feed}
          isAuthenticated={user.logged}
        />
      </Switch>
    </Router>
  )
}
