import styles from '../styles/LoginButtons.module.css'

const LoginButtons = () => {
  return (
    <div className={styles.login}>
      <button>Log In</button>
      <button>Register</button>
    </div>
  )
}

export default LoginButtons
