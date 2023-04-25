// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD91PXldR5hXseqTG_Wr7goSM5MAcYKgQ",
  authDomain: "open-book-7e486.firebaseapp.com",
  projectId: "open-book-7e486",
  storageBucket: "open-book-7e486.appspot.com",
  messagingSenderId: "1433436337",
  appId: "1:1433436337:web:2c0831ea827a6c25106290",
  measurementId: "G-D7SG80ZCLQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
