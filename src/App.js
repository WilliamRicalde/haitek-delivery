import { useState, useEffect } from 'react'
import { loginWithGoogle, onAuthStateChange, logOut } from './services/login'
import ProfileCard from './components/ProfileCard'
import { FcGoogle } from 'react-icons/fc'

import './styles/App.css'

function App () {
  const [user, setUser] = useState(undefined)

  const handleLogin = async () => {
    loginWithGoogle().then(loggedUser => {
      setUser(loggedUser)
    })
  }

  const handleLogout = async () => {
    logOut().then(setUser(undefined))
  }

  useEffect(() => {
    onAuthStateChange(setUser)
  }, [])

  return (
    <div>
      <h1>Login</h1>

      {!user
        ? <button onClick={handleLogin}><FcGoogle />Login with Google</button>
        : <ProfileCard {...user} logOut={handleLogout} />}
    </div>
  )
}

export default App
