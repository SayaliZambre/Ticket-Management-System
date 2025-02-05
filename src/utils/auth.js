// src/utils/auth.js

import { auth } from '../firebase';  // Ensure correct import
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const loginUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
  return signOut(auth);
};

export const checkAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};
