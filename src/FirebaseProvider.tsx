import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";
import { app } from "./firebase-config";

export const FirebaseContext = React.createContext({
  authState: {} as AuthStateHook,
  logOut: () => {},
  signInWithGoogle: () => {},
});

function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const auth = getAuth(app);

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
