import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAB6s2xTqFynHyB9KbZBx_6Tqpj0RBQZDQ',
  authDomain: 'haitek-delivery.firebaseapp.com',
  projectId: 'haitek-delivery',
  storageBucket: 'haitek-delivery.appspot.com',
  messagingSenderId: '371053788645',
  appId: '1:371053788645:web:e36c9e044aba55cada030c'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
