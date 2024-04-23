// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a041f.firebaseapp.com",
  projectId: "mern-estate-a041f",
  storageBucket: "mern-estate-a041f.appspot.com",
  messagingSenderId: "930683943593",
  appId: "1:930683943593:web:dd2a9f2ea4083b863507b8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
