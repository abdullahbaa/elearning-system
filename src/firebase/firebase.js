// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkoKMSZz9gMwZ855BJUmqVCB6r5KA-0zg",
  authDomain: "e-learning-33aa2.firebaseapp.com",
  projectId: "e-learning-33aa2",
  storageBucket: "e-learning-33aa2.firebasestorage.app",
  messagingSenderId: "328617603412",
  appId: "1:328617603412:web:9630727816598ca129d8c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);