import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0hdeeUWMWu5sqbHDXDj8tPkXJwfapYCw",
  authDomain: "whatsapp-clone-90261.firebaseapp.com",
  projectId: "whatsapp-clone-90261",
  storageBucket: "whatsapp-clone-90261.appspot.com",
  messagingSenderId: "1054735157444",
  appId: "1:1054735157444:web:48fcd888470ea303a1e191",
  measurementId: "G-02T8Z4T8RV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
