import { useReducer, useEffect } from 'react'
import { authReducer, userContext } from './context/authContext'
import { onAuthStateChange } from './services/auth'
import { AppRouter } from './router/AppRouter'

import './styles/index.css'

function App () {
  const [user, dispatch] = useReducer(authReducer, { logged: false })

  useEffect(async () => {
    onAuthStateChange(dispatch)
  }, [user?.name])

  return (
    <userContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </userContext.Provider>
  )
}

export default App
