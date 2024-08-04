


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDXRNKLdB5h7Y335HvBSnJAW_7J1uT6yA",
  authDomain: "netflix-gt-e72de.firebaseapp.com",
  projectId: "netflix-gt-e72de",
  storageBucket: "netflix-gt-e72de.appspot.com",
  messagingSenderId: "149645016899",
  appId: "1:149645016899:web:1f67d53c55935e638339f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();