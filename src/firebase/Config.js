import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyD8c0EKlLmYoIGJiy1VehyZk_b7ARtgeKs",
    authDomain: "capstone-project-20e94.firebaseapp.com",
    projectId: "capstone-project-20e94",
    storageBucket: "capstone-project-20e94.appspot.com",
    messagingSenderId: "930454437252",
    appId: "1:930454437252:web:7ae4f88fa78ee9416c31d1",
    measurementId: "G-6NWYBQ7CYY"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service 
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp } 