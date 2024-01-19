// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuT74ii8bB_kdbRhvWw6wF7o7iAEx94BE",
  authDomain: "standbyme-5d856.firebaseapp.com",
  projectId: "standbyme-5d856",
  storageBucket: "standbyme-5d856.appspot.com",
  messagingSenderId: "273613810149",
  appId: "1:273613810149:web:d33123bb556989172be70c",
  measurementId: "G-JP95E41E9K"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {app, auth};