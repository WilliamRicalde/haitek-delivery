import { useContext } from 'react'
import { userContext } from '../context/authContext'
import { logOut, loginWithFacebook } from '../services/auth'
import Navbar from '../components/Navbar'

const Home = () => {
  const { setUser } = useContext(userContext)

  const handleLoginWithFacebook = async () => {
    const loggedUser = await loginWithFacebook()
    setUser(loggedUser)
  }

  return (
    <>
      <Navbar />
      <button onClick={() => logOut(setUser)}>Log Out</button>
      <button onClick={handleLoginWithFacebook}>LogIn</button>
    </>
  )
}

export default Home
