// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGrPFuyV66Jn2KkDiqcb20kfAuOi0Wqjk",
  authDomain: "photo-folio-c53a7.firebaseapp.com",
  projectId: "photo-folio-c53a7",
  storageBucket: "photo-folio-c53a7.appspot.com",
  messagingSenderId: "374102785989",
  appId: "1:374102785989:web:9fed395d225dc1b9e755ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

// Export statements
export const db=getFirestore(app);
export {auth};