import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FirebaseContext } from "./FirebaseProvider";
import React from "react";

function LoginForm() {
  const { signInWithGoogle } = React.useContext(FirebaseContext);

  return (
    <>
      <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
    </>
  );
}
export default LoginForm;
