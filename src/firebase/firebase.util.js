import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCahhppEkzIGCWGZ3SvksiXXyw3vJ6w6vo",
  authDomain: "kleren-a2cdc.firebaseapp.com",
  projectId: "kleren-a2cdc",
  storageBucket: "kleren-a2cdc.appspot.com",
  messagingSenderId: "261009934179",
  appId: "1:261009934179:web:68ef56b1fb235b5e743556",
  measurementId: "G-59N38BLC3Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
