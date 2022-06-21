import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyD8c0EKlLmYoIGJiy1VehyZk_b7ARtgeKs",
    authDomain: "capstone-project-20e94.firebaseapp.com",
    projectId: "capstone-project-20e94",
    storageBucket: "capstone-project-20e94.appspot.com",
    messagingSenderId: "930454437252",
    appId: "1:930454437252:web:7ae4f88fa78ee9416c31d1",
    measurementId: "G-6NWYBQ7CYY"  
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// add timestamp  
const timestamp = firebase.firestore.Timestamp

//export service so they can be used in other components
export { projectFirestore, projectAuth, timestamp }