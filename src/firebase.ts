import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiakPYjKv2rkTF5y2yibH_QAjxXAGMG8w",
  authDomain: "login-auth-745f3.firebaseapp.com",
  projectId: "login-auth-745f3",
  storageBucket: "login-auth-745f3.firebasestorage.app",
  messagingSenderId: "22929475584",
  appId: "1:22929475584:web:43f4d2b26e5f636d5830e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { app, db }; // Export both app and db