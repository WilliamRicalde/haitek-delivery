import firebase from './firebase'

export const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  return firebase.auth().signInWithPopup(provider)
    .then(result => {
      const { email, displayName, photoURL, uid } = result

      return {
        uid,
        email,
        name: displayName,
        picture: photoURL,
        logged: true
      }
    })
    .catch(e => console.log(e))
}

export const loginWithFacebook = async () => {
  const provider = new firebase.auth.FacebookAuthProvider()

  return firebase.auth().signInWithPopup(provider)
    .then(result => {
      const { email, displayName, photoURL, uid } = result

      return {
        uid,
        email,
        name: displayName,
        picture: photoURL,
        logged: true
      }
    })
    .catch(e => console.log(e))
}

export const onAuthStateChange = onChange => {
  return firebase.auth().onAuthStateChanged(user => {
    if (user || user !== null) {
      const { email, displayName, photoURL, uid } = user
      const normalizedUser = {
        uid,
        email,
        name: displayName,
        picture: photoURL,
        logged: true
      }
      onChange(normalizedUser)
    }
  })
}

export const logOut = async (onChange) => {
  firebase.auth().signOut().then(() => {
    onChange({})
  })
}
