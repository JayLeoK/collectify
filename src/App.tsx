/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { initializeApp } from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

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

function App() {
  return (
    <div css={appCss.container}>
      <div css={appCss.header}>Collectify</div>
    </div>
  );
}

export default App;

const appCss = {
  container: css({
    width: "100%",
    height: "100%",
    backgroundColor: "lightblue",
    display: "grid",
    placeContent: "center",
  }),

  header: css({
    fontSize: "3rem",
    fontWeight: 700,
    color: "forestgreen",
  }),
};
