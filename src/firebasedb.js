import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// other services is needed
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAko4E1QLLuwlzf3GTn0e1pCvrY5xd72YM",
  authDomain: "react-link-kisaltma.firebaseapp.com",
  projectId: "react-link-kisaltma",
  storageBucket: "react-link-kisaltma.appspot.com",
  messagingSenderId: "683170312841",
  appId: "1:683170312841:web:25a4f597d4b03134ae8c58",
  measurementId: "G-NY9SWTVXVP",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
