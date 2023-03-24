import { Auth } from "firebase/auth";

function Dashboard({ auth }: { auth: Auth }) {
  return (
    <>
      <div>You are logged in!</div>
      <button onClick={() => auth.signOut()}>Sign Out</button>;
    </>
  );
}
export default Dashboard;
