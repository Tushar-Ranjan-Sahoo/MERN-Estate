// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1efbf.firebaseapp.com",
  projectId: "mern-estate-1efbf",
  storageBucket: "mern-estate-1efbf.appspot.com",
  messagingSenderId: "64248531802",
  appId: "1:64248531802:web:3e900d20160376a2ee8163"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);