import { FirestoreLocation } from "./models/Location";

type Props = {
  locations: FirestoreLocation[];
};

const LocationsTable: React.FC<Props> = ({ locations }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>URL</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id}>
              <td>{location.name}</td>
              <td>{location.address}</td>
              <td>{location.url}</td>
              <td>{location.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default LocationsTable;
