// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6HzN5WD8UeRH-K2JLUkW6rAKd64EYOdY",
  authDomain: "adv-internship-a70dd.firebaseapp.com",
  projectId: "adv-internship-a70dd",
  storageBucket: "adv-internship-a70dd.appspot.com",
  messagingSenderId: "748488170024",
  appId: "1:748488170024:web:0dc3657c97633afc1b331d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export const initFirebase = () => {
  return app;
};
const db = getFirestore(app)
export {db, auth}