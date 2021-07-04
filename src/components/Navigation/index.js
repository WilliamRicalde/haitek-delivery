import { useContext, useState, useEffect } from 'react'
import { userContext } from '../../context/authContext'
import { HiLogout } from 'react-icons/hi'
import Modal from 'react-modal'
import styles from './Navbar.module.css'
import { logOut } from '../../services/auth'
import LoginCard from '../Login'

const Navbar = () => {
  const { user, dispatch } = useContext(userContext)
  const [modalIsOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (user) {
      setIsOpen(false)
    }
  }, [user])

  const customStyles = {
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0)',
      border: 'none',
      zIndex: 30
    }
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h1>Haitek</h1>
      </div>
      {
        user.name
          ? <h4>{user.name}<button className={styles.logout} onClick={() => logOut(dispatch)}><HiLogout /></button></h4>
          : <div>
            <button className={styles.loginButton} onClick={openModal}>Entrar</button>
            <button className={styles.loginButton}>Registrarse</button>
            {/* eslint-disable-next-line */}
          </div>
      }
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example'
      >
        <LoginCard closeModal={closeModal} />
      </Modal>
    </nav>
  )
}

export default Navbar
