// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXSnL1Iw13FBQC-OcfbSRVqAZRwkYJwzU",
  authDomain: "auth-fb-context-tailwind-b0121.firebaseapp.com",
  projectId: "auth-fb-context-tailwind-b0121",
  storageBucket: "auth-fb-context-tailwind-b0121.appspot.com",
  messagingSenderId: "915270086739",
  appId: "1:915270086739:web:1dacdd4da9e81f3c6596a6"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export default FirebaseApp;