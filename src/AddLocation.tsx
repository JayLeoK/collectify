import React, { FC } from "react";
import useLocationsCollection from "./hooks/useLocationsCollection";

import { LocationFields } from "./models/Location";
import { GeoPoint } from "firebase/firestore";
const AddLocation: FC<{}> = () => {
  const [name, setName] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [url, setUrl] = React.useState<string>("");
  const [rating, setRating] = React.useState<number>(0);

  const { addLocation } = useLocationsCollection();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(
      `Name: ${name}, Address: ${address}, URL: ${url}, Rating: ${rating}`
    );
    addLocation({
      name,
      address,
      url,
      rating,
      coordinates: new GeoPoint(0, 0),
    } as LocationFields);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="url">URL</label>
        <input
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <button type="submit">Submit Location</button>
      </form>
    </>
  );
};

export default AddLocation;
