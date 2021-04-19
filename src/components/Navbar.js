import { useContext } from 'react'
import { userContext } from '../context/authContext'
import LoginButtons from './LoginButtons'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const { user } = useContext(userContext)
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h1>Haitek</h1>
      </div>
      <div className={styles.search}>
        <input type='text' name='search' placeholder='Buscar' />
      </div>
      {
        user.name
          ? <h4>Hola {user.name}</h4>
          : <LoginButtons />
      }

    </nav>
  )
}

export default Navbar
