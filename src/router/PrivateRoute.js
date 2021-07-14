import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLogged, path, ...rest }) => {
  return (
    <Route
      {...rest}
      component={props => (
        isLogged
          ? <Component {...props} />
          : <Redirect to='/' />
      )}
    />
  )
}

export default PrivateRoute
