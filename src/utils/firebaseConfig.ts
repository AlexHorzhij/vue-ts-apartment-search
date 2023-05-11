// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeziyP0cFxZgpn2ZeyEpjjjOk-XFikxDo",
  authDomain: "vue-ts-search-apartment.firebaseapp.com",
  projectId: "vue-ts-search-apartment",
  storageBucket: "vue-ts-search-apartment.appspot.com",
  messagingSenderId: "804895901781",
  appId: "1:804895901781:web:1be7c9834bb0ef83cbecdc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
