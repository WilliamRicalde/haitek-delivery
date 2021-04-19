import { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Feed from '../pages/Feed'
import { userContext } from '../context/authContext'
import { onAuthStateChange } from '../services/auth'

export const AppRoute = () => {
  const { user, setUser } = useContext(userContext)

  useEffect(async () => {
    onAuthStateChange(setUser)
    console.log('hola')
  }, [user.name])

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/feed' exact>
          <Feed />
        </Route>
      </Switch>
    </Router>
  )
}
