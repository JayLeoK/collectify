import useLocationsCollection from "./hooks/useLocationsCollection";

const LocationsView: React.FC<{}> = () => {
  const { locationData } = useLocationsCollection();

  return (
    <>
      <h1>Locations</h1>
      {JSON.stringify(locationData)}
    </>
  );
};

export default LocationsView;
