// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCatz9xmMdBFECWm7xCLHjW9Y82oBEjEgY",
  authDomain: "netflix-clone-f7848.firebaseapp.com",
  projectId: "netflix-clone-f7848",
  storageBucket: "netflix-clone-f7848.appspot.com",
  messagingSenderId: "630717241665",
  appId: "1:630717241665:web:ba3ade46546587310129c0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }