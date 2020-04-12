import firebase from 'firebase/app'
import 'firebase/auth'
import withFirebaseAuth from 'react-with-firebase-auth'

import { firebaseApp } from './initializer'

const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}

const withAuthConfiguration = withFirebaseAuth({
  providers,
  firebaseAppAuth,
})

export { withAuthConfiguration }
