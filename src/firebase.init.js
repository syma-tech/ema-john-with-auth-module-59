// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ehXOgwKik-Mr4Ux5nmg57cLHb1RZgfs",
  authDomain: "ema-john-simple6.firebaseapp.com",
  projectId: "ema-john-simple6",
  storageBucket: "ema-john-simple6.appspot.com",
  messagingSenderId: "419643531679",
  appId: "1:419643531679:web:9a999cc135304604359daa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
