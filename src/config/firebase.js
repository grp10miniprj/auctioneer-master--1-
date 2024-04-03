import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCYd9ds5e72n7e-9pfpBxzLEQuQBSCSNo8",
  authDomain: "oas1-d43bd.firebaseapp.com",
  projectId: "oas1-d43bd",
  storageBucket: "oas1-d43bd.appspot.com",
  messagingSenderId: "766768920772",
  appId: "1:766768920772:web:0abfbb688fb6fe16503191",
  measurementId: "G-2GYJFPZY3B"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
