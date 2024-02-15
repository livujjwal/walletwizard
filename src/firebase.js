// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPQL-ybZW9iRXf0Nrj12zXb4Ho3PJyyCE",
  authDomain: "walletwizard-ab8aa.firebaseapp.com",
  projectId: "walletwizard-ab8aa",
  storageBucket: "walletwizard-ab8aa.appspot.com",
  messagingSenderId: "907004207456",
  appId: "1:907004207456:web:4318d2e1d3f5611e93be05",
  measurementId: "G-7BLD5S3B1Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export { db, doc, setDoc, auth, provider };
