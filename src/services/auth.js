import firebase from './firebase'
import { types } from '../context/types'

export const loginWithGoogle = async (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider()

  return firebase.auth().signInWithPopup(provider)
    .then(result => {
      const { email, displayName, photoURL, uid } = result

      const normalizedUser = {
        uid,
        email,
        name: displayName,
        picture: photoURL,
        logged: true
      }

      dispatch({
        type: types.login,
        payload: {
          ...normalizedUser
        }
      })
    })
    .catch(e => console.log(e))
}

export const loginWithFacebook = async (dispatch) => {
  const provider = new firebase.auth.FacebookAuthProvider()

  return firebase.auth().signInWithPopup(provider)
    .then(result => {
      const { email, displayName, photoURL, uid } = result

      const normalizedUser = {
        uid,
        email,
        name: displayName,
        picture: photoURL,
        logged: true
      }

      dispatch({
        type: types.login,
        payload: {
          ...normalizedUser
        }
      })
    })
    .catch(e => console.log(e))
}

export const onAuthStateChange = dispatch => {
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
      dispatch({
        type: types.login,
        payload: {
          ...normalizedUser
        }
      })
    }
  })
}

export const logOut = async (dispatch) => {
  firebase.auth().signOut().then(() => {
    dispatch({ type: types.logout })
  })
}
