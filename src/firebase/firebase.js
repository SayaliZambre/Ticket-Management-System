// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFlo0cMY8ATZJnochZG54pRiVeBu2nsDo",
  authDomain: "ticket-support-3adf0.firebaseapp.com",
  projectId: "ticket-support-3adf0",
  storageBucket: "ticket-support-3adf0.appspot.com", // Fixed storageBucket URL
  messagingSenderId: "622890085516",
  appId: "1:622890085516:web:5f5a9d73774ac9d49a1fa9",
  measurementId: "G-907S6DNTQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase services
export { app, auth, db, storage };
