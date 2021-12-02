/*  import firebase from 'firebase' ;  */
/* import firebase from "firebase/compat/app"; */
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDs9O3DahQZ0L_VNcpFRDF0j28tYbLGzpE",
    authDomain: "fb-clone-44496.firebaseapp.com",
    projectId: "fb-clone-44496",
    storageBucket: "fb-clone-44496.appspot.com",
    messagingSenderId: "1086706679038",
    appId: "1:1086706679038:web:c495a3cc6440ef4820b9af",
    measurementId: "G-MYRQPZXMVG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;
  