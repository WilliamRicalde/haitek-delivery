import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLogged, path, ...rest }) => {
  return (
    <Route
      path={path}
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
