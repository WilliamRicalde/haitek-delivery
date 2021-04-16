import { useEffect, useContext } from 'react'
import { loginWithGoogle, loginWithFacebook, onAuthStateChange, logOut } from '../services/auth'
import { userContext } from '../context/authContext'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

import styles from '../styles/Home.module.css'

function Home () {
  const { user, setUser } = useContext(userContext)

  const handleLoginWithGoogle = async () => {
    const loggedUser = await loginWithGoogle()
    setUser(loggedUser)
  }

  const handleLoginWithFacebook = async () => {
    const loggedUser = await loginWithFacebook()
    setUser(loggedUser)
  }

  useEffect(async () => {
    onAuthStateChange(setUser)
    console.log('hola')
  }, [user.name])

  return (
    <div className={styles.card}>
      <img
        src='https://images.unsplash.com/photo-1509482560494-4126f8225994'
        alt='img'
      />
      <div style={styles.text}>
        <h1>Login</h1>
        <button onClick={handleLoginWithGoogle}>
          <FcGoogle />Login with Google
        </button>
        <button onClick={handleLoginWithFacebook}>
          <FaFacebook />Login with Facebook
        </button>
        <button onClick={() => logOut(setUser)}>LogOut</button>
      </div>
    </div>
  )
}

export default Home
