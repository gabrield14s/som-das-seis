// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQZh5klQQSMbgUFNfBEDYE2_y2sX1JBrI",
  authDomain: "sacramento-35be9.firebaseapp.com",
  projectId: "sacramento-35be9",
  storageBucket: "sacramento-35be9.firebasestorage.app",
  messagingSenderId: "278171492010",
  appId: "1:278171492010:web:d04a2a23bc914f9e2f7ad3",
  measurementId: "G-EDP2B6YWQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
const analytics = getAnalytics(app);

export { auth, provider };