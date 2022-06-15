import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "sandy-blog-3df5d.firebaseapp.com",
  projectId: "sandy-blog-3df5d",
  storageBucket: "sandy-blog-3df5d.appspot.com",
  messagingSenderId: process.env.MSID,
  appId: process.env.APP_ID,
  measurementId: "G-PCF00919YH",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init firestore service

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
