// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT1daVFIDZ76kdeDaX6PgHFWpaGP2zfUc",
  authDomain: "portfolio-d3c60.firebaseapp.com",
  databaseURL: "https://portfolio-d3c60-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-d3c60",
  storageBucket: "portfolio-d3c60.appspot.com",
  messagingSenderId: "225349595935",
  appId: "1:225349595935:web:db0dd42a4f4394b4b5362a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);