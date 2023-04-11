// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdPPj66XehiPsnYciv1R1mH5beFwxO2Xk",
  authDomain: "wound-cards.firebaseapp.com",
  databaseURL: "https://wound-cards-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wound-cards",
  storageBucket: "wound-cards.appspot.com",
  messagingSenderId: "560082099307",
  appId: "1:560082099307:web:df4180664d18a41d7ba52e",
  measurementId: "G-R6LLK25RDP"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

//const db
const db = getDatabase(firebaseApp)

export {
    db
  }