import AddLocation from "./AddLocation";
import LocationsView from "./LocationsView";

function Dashboard() {
  return (
    <>
      <div>
        <h1>My collections</h1>
      </div>
      <div>
        <h3>Location collection</h3>
        <AddLocation />
        <LocationsView />
      </div>
    </>
  );
}
export default Dashboard;
