


import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD6jWADv7D6IRdhSUEXBb3Q4-Tq9_a1RY0",
  authDomain: "multimart-59161.firebaseapp.com",
  projectId: "multimart-59161",
  storageBucket: "multimart-59161.appspot.com",
  messagingSenderId: "1091171904834",
  appId: "1:1091171904834:web:770f8122561868854d6cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;