// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseError } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyDPh0c9Mf5LOn1-gFwu6_MFWTZ28aPQe58',
  authDomain: 'b3vibe.firebaseapp.com',
  databaseURL: 'https://b3vibe-default-rtdb.firebaseio.com',
  projectId: 'b3vibe',
  storageBucket: 'b3vibe.appspot.com',
  messagingSenderId: '129076972980',
  appId: '1:129076972980:web:5892c4a2fc34ce995df6e1',
  measurementId: 'G-1HG7WT517X'
}

// Initialize Firebase
initializeApp(firebaseConfig)

//init services
const auth = getAuth()

export { auth, createUserWithEmailAndPassword, FirebaseError }
