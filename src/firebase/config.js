import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAuKLbs4ttumopeeGKgZsl_xFLDFapFnZQ",
    authDomain: "money-app-udemy.firebaseapp.com",
    projectId: "money-app-udemy",
    storageBucket: "money-app-udemy.appspot.com",
    messagingSenderId: "1044478027503",
    appId: "1:1044478027503:web:5791ca4f6be62bfab49d1a"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }