import { useReducer } from 'react'
import { authReducer, userContext } from './context/authContext'
import { AppRouter } from './router/AppRouter'

import './styles/index.css'

function App () {
  const [user, dispatch] = useReducer(authReducer, { logged: false })

  return (
    <userContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </userContext.Provider>
  )
}

export default App
