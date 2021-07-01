import { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import { userContext } from '../context/authContext'
import { onAuthStateChange } from '../services/auth'

export const AppRouter = () => {
  const { user, dispatch } = useContext(userContext)

  useEffect(async () => {
    onAuthStateChange(dispatch)
  }, [user?.name])

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
