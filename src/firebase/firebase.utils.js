import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {

    apiKey: "AIzaSyDhM7hMzMVMt4vZO4mYljd9RTAo6iZ_Wfs",
    authDomain: "black-db-4646a.firebaseapp.com",
    databaseURL: "https://black-db-4646a.firebaseio.com",
    projectId: "black-db-4646a",
    storageBucket: "black-db-4646a.appspot.com",
    messagingSenderId: "899095503238",
    appId: "1:899095503238:web:62b307f5f9b2263566cc07",
    measurementId: "G-TVK9PNRTH7"
  
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase