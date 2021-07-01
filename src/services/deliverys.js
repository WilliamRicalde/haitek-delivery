import firebase from './firebase'

const db = firebase.firestore()

export const getDeliverys = async (onChange) => {
  db.collection('deliverys').onSnapshot(querySnapshot => {
    const docs = []

    querySnapshot.forEach(doc => {
      docs.push({ ...doc.data(), id: doc.id })
    })

    onChange(docs)
  })
}
