import 'firebase/firestore'

import { firebaseApp } from './initializer'

const firebaseDB = firebaseApp.firestore()

export { firebaseDB }
