// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Cg1c3WZpM0hG_PiU0m5uarEapgCyJ4g",
  authDomain: "otp-project-91006.firebaseapp.com",
  projectId: "otp-project-91006",
  storageBucket: "otp-project-91006.appspot.com",
  messagingSenderId: "471009860433",
  appId: "1:471009860433:web:601272ced0f27f1cb41170",
  measurementId: "G-ZVTYM5HMGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);