// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKw63A2kMqO3HZvZIIKNUbzDkWQGXUT_A",
  authDomain: "virtual-internship-2.firebaseapp.com",
  projectId: "virtual-internship-2",
  storageBucket: "virtual-internship-2.appspot.com",
  messagingSenderId: "341605723696",
  appId: "1:341605723696:web:dc761b5e5f0405744a07f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}