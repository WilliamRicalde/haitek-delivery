import { useContext } from 'react'
import { loginWithGoogle, loginWithFacebook, logOut } from '../services/auth'
import { userContext } from '../context/authContext'

import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

import styles from '../styles/Login.module.css'

function LoginCard () {
  const { user, setUser } = useContext(userContext)
  const { name } = user

  const handleLoginWithGoogle = async () => {
    const loggedUser = await loginWithGoogle()
    setUser(loggedUser)
  }

  const handleLoginWithFacebook = async () => {
    const loggedUser = await loginWithFacebook()
    setUser(loggedUser)
  }

  return (
    <div className={styles.card}>
      <img
        src='https://images.unsplash.com/photo-1509482560494-4126f8225994'
        alt='img'
      />
      <div style={styles.text}>
        <h1>Login</h1>
        {user.name
          ? <h3>{`Hola ${name.split(' ')[0]}`}</h3>
          : <h3>Loggeate</h3>}
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

export default LoginCard
