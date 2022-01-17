import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB20tAbNuwVpJ6Pcrmsp_Db6x4N5yFsCh0",
    authDomain: "sandy-blog-3df5d.firebaseapp.com",
    projectId: "sandy-blog-3df5d",
    storageBucket: "sandy-blog-3df5d.appspot.com",
    messagingSenderId: "356656743190",
    appId: "1:356656743190:web:e8a2ab11275f154b510637",
    measurementId: "G-PCF00919YH"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)

  //init firestore service

  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore,timestamp}