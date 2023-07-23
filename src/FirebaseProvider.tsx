import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";

export const FirebaseContext = React.createContext({
  authState: {} as AuthStateHook,
  logOut: () => {},
  signInWithGoogle: () => {},
});

function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const firebaseConfig = {
    apiKey: "AIzaSyB4yCbe_4m3nGQDB864NtYEdU7xYpDh9bg",
    authDomain: "dark-carport-268901.firebaseapp.com",
    projectId: "dark-carport-268901",
    storageBucket: "dark-carport-268901.appspot.com",
    messagingSenderId: "575650731597",
    appId: "1:575650731597:web:e003614d02bd555934ee04",
    measurementId: "G-LN4L2WECK2",
  };
  initializeApp(firebaseConfig);
  const auth = getAuth();

  function logOut() {
    auth.signOut();
  }
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <FirebaseContext.Provider
      value={{
        authState: useAuthState(auth),
        logOut: logOut,
        signInWithGoogle: signInWithGoogle,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}
export default FirebaseProvider;
