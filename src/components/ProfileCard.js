import { useContext } from 'react'
import { userContext } from '../context/authContext'
import { logOut } from '../services/login'

export default function ProfileCard () {
  const { user, setUser } = useContext(userContext)
  const { picture, name, email } = user

  const handleLogout = async () => {
    logOut(setUser)
  }

  return (
    <div>
      <img src={picture} alt='avatar' />
      <h3>{name}</h3>
      <span>{email}</span>
      <button onClick={handleLogout}>Cerrar sesion</button>
    </div>
  )
}
