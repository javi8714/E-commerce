// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn26usuoGbo8yVGXmzIwW2frmufyT2AMk",
  authDomain: "proyecto-final-react-js-10e1a.firebaseapp.com",
  projectId: "proyecto-final-react-js-10e1a",
  storageBucket: "proyecto-final-react-js-10e1a.appspot.com",
  messagingSenderId: "954019645947",
  appId: "1:954019645947:web:dc0a9247be2c702ae8a35e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()


