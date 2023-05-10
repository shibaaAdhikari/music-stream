// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzX10dlZJNJsbm9Awt6BDeC5vuXLohCR4",
  authDomain: "music-stream-e9c95.firebaseapp.com",
  projectId: "music-stream-e9c95",
  storageBucket: "music-stream-e9c95.appspot.com",
  messagingSenderId: "726996279927",
  appId: "1:726996279927:web:7d11973d7e3033a8b8dc72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
