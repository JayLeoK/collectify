import { GeoPoint } from "firebase/firestore";

export interface LocationFields {
  name: string;
  address: string;
  url: string;
  rating: number;
  coordinates: GeoPoint;
}

export interface FirestoreLocation extends LocationFields {
  id: string;
}
