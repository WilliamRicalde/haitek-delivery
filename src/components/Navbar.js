import { useContext, useState, useEffect } from 'react'
import { userContext } from '../context/authContext'
import { HiLogout } from 'react-icons/hi'
import Modal from 'react-modal'
import styles from '../styles/Navbar.module.css'
import { logOut } from '../services/auth'
import LoginCard from './LoginCard'

const Navbar = () => {
  const { user, setUser } = useContext(userContext)
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
      zIndex: '500'
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
      <div className={styles.search}>
        <input type='text' name='search' placeholder='Buscar' />
      </div>
      {
        user.name
          ? <h4>{user.name}<button className={styles.logout} onClick={() => logOut(setUser)}><HiLogout /></button></h4>
          : <button className={styles.loginButton} onClick={openModal}>Entrar</button>
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
