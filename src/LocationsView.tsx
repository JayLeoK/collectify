import LocationsTable from "./LocationsTable";
import useLocationsCollection from "./hooks/useLocationsCollection";

const LocationsView: React.FC<{}> = () => {
  const { locationData } = useLocationsCollection();

  return (
    <>
      <h1>Locations</h1>
      {locationData && <LocationsTable locations={locationData} />}
    </>
  );
};

export default LocationsView;
