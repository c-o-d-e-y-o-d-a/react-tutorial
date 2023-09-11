// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth,GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOVKUrLTGii1Z23ruRNOUHQqrakxTZFCY",
  authDomain: "react-project-c43c9.firebaseapp.com",
  projectId: "react-project-c43c9",
  storageBucket: "react-project-c43c9.appspot.com",
  messagingSenderId: "892338162197",
  appId: "1:892338162197:web:99eeda973a613fb67d5c1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();