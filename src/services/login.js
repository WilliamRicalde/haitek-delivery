import firebase from './firebase'

const normalizeUser = user => {
  const { email, displayName, photoURL } = user
  return {
    email,
    name: displayName,
    picture: photoURL
  }
}

export const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  return firebase.auth().signInWithPopup(provider)
    .then(result => normalizeUser(result))
    .catch(e => console.log(e))
}

export const onAuthStateChange = onChange => {
  return firebase.auth().onAuthStateChanged(user => {
    const normalizedUser = normalizeUser(user)
    onChange(normalizedUser)
  })
}

export const logOut = async () => {
  return firebase.auth().signOut()
}
