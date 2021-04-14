export default function ProfileCard ({ name, email, picture, logOut }) {
  // console.log(name)
  return (
    <div>
      <img src={picture} alt='avatar' />
      <h3>{name}</h3>
      <span>{email}</span>
      <button onClick={logOut}>Cerrar sesion</button>
    </div>
  )
}
