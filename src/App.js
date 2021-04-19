import { UserAuthProvider } from './context/authContext'
import { AppRoute } from './routes/AppRoute'

import './styles/index.css'

function App () {
  return (
    <UserAuthProvider>
      <AppRoute />
    </UserAuthProvider>
  )
}

export default App
