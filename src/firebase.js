// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from 'firebase'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIW_dpQmnoyNfDo-OimvYUw353PkGHlLg",
  authDomain: "secret-app-8fdc9.firebaseapp.com",
  projectId: "secret-app-8fdc9",
  storageBucket: "secret-app-8fdc9.appspot.com",
  messagingSenderId: "592346176633",
  appId: "1:592346176633:web:2f6d54bca278f972b308a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app