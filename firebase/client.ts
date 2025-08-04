// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyDs1kdQFC0QLOutuRL0crLdUB3zxGafswU",
  authDomain: "interview-pro-ca3d8.firebaseapp.com",
  projectId: "interview-pro-ca3d8",
  storageBucket: "interview-pro-ca3d8.firebasestorage.app",
  messagingSenderId: "798301793535",
  appId: "1:798301793535:web:bc0c22159091a6277df0ca",
  measurementId: "G-BG45E5ZE0L"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);