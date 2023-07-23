import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4yCbe_4m3nGQDB864NtYEdU7xYpDh9bg",
  authDomain: "dark-carport-268901.firebaseapp.com",
  projectId: "dark-carport-268901",
  storageBucket: "dark-carport-268901.appspot.com",
  messagingSenderId: "575650731597",
  appId: "1:575650731597:web:e003614d02bd555934ee04",
  measurementId: "G-LN4L2WECK2",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
