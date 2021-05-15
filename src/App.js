import { UserAuthProvider } from './context/authContext'
import { AppRouter } from './router/AppRouter'

import './styles/index.css'

function App () {
  return (
    <UserAuthProvider>
      <AppRouter />
    </UserAuthProvider>
  )
}

export default App
