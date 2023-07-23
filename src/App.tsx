/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Dashboard from "./Dashboard";
import React from "react";
import { FirebaseContext } from "./FirebaseProvider";
import LoginForm from "./LoginForm";

function App() {
  const { authState, logOut } = React.useContext(FirebaseContext);
  const [user, userLoading, userError] = authState;
  return (
    <>
      {user ? (
        <>
          <div css={appCss.navBar}>
            <h2>Collectify</h2>
            <div css={appCss.logoutWrapper}>
              <span>You are signed in as {user.email}</span>
              <button onClick={logOut}>Sign Out</button>
            </div>
          </div>
          <div css={appCss.homeContent}>
            <Dashboard />
          </div>
        </>
      ) : (
        <div css={appCss.loginContainer}>
          <div css={appCss.loginHeader}>Collectify</div>
          <section>
            <LoginForm />
          </section>
        </div>
      )}
    </>
  );
}

export default App;

const appCss = {
  loginContainer: css({
    width: "100%",
    height: "100%",
    backgroundColor: "lightblue",
    display: "grid",
    placeContent: "center",
  }),

  loginHeader: css({
    fontSize: "3rem",
    fontWeight: 700,
    color: "forestgreen",
  }),

  navBar: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    backgroundColor: "lightblue",
    color: "forestgreen",
    padding: "16px",
    fontSize: "20px",
  }),

  logoutWrapper: css({
    display: "flex",
    alignItems: "baseline",
    gap: "12px",
  }),

  homeContent: css({
    display: "grid",
    placeContent: "center",
    backgroundColor: "gray",
    height: "100%",
    width: "100%",
  }),
};
