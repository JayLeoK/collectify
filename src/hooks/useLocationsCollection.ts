import { collection } from "@firebase/firestore";
import { db } from "../firebase-config";
import { addDoc, getDocs, query } from "firebase/firestore";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { FirestoreLocation, LocationFields } from "../models/Location";

const useLocationsCollection = () => {
  const locationsCollectionRef = collection(db, "locations");
  const queryClient = useQueryClient();

  const getLocationsQuery = useQuery("locations", async () => {
    const locationQuery = query(locationsCollectionRef);
    const locationsSnapshot = await getDocs(locationQuery);
    const result: FirestoreLocation[] = [];

    locationsSnapshot.forEach((doc) => {
      const data = doc.data();
      result.push({
        id: doc.id,
        name: data.name,
        address: data.address,
        url: data.url,
        rating: data.rating,
        coordinates: data.coordinates,
      });
    });
    return result;
  });

  const addLocationMutation = useMutation(
    "addLocation",
    (newLocation: LocationFields) => {
      return addDoc(locationsCollectionRef, newLocation);
    },
    {
      onSuccess: () => {
        console.log("success");
        queryClient.invalidateQueries("transactions");
      },
    }
  );
  return {
    locationData: getLocationsQuery.data,
    locationStatus: getLocationsQuery.status,
    locationError: getLocationsQuery.error,
    addLocation: addLocationMutation.mutateAsync,
    addLocationStatus: addLocationMutation.status,
  };
};

export default useLocationsCollection;
