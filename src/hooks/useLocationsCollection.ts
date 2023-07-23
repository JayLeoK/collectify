import { collection } from "@firebase/firestore";
import { db } from "../firebase-config";
import { addDoc } from "firebase/firestore";
import { useMutation } from "react-query";
import { LocationFields } from "../models/Location";

const useLocationsCollection = () => {
  const locationsCollectionRef = collection(db, "locations");
  // const queryClient = useQueryClient();
  const addLocationMutation = useMutation(
    "addLocation",
    (newLocation: LocationFields) => {
      return addDoc(locationsCollectionRef, newLocation);
    },
    {
      onSuccess: () => {
        console.log("success");
      },
    }
  );
  return {
    addLocation: addLocationMutation.mutateAsync,
    addLocationStatus: addLocationMutation.status,
  };
};

export default useLocationsCollection;
