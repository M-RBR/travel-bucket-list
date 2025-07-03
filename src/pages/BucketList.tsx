import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import type { Country } from "../@types/Country";
import { db } from "../firebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

export default function BucketList() {
  const { user } = useAuth();
  const [bucketList, setBucketList] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBucketList() {
      if (!user) return;

      try {
        const bucketRef = collection(db, "users", user.uid, "bucketList");
        const snapshot = await getDocs(bucketRef);
        const countries: Country[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.name?.common && data.flags?.png) {
            countries.push(data as Country);
          } else {
            console.warn("Invalid country data in Firestore:", data);
          }
        });

        setBucketList(countries);
      } catch (err) {
        console.error("Failed to fetch bucket list:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBucketList();
  }, [user]);

  async function handleDelete(nameToDelete: string) {
    if (!user) return;

    try {
      const docRef = doc(
        db,
        "users",
        user.uid,
        "bucketList",
        nameToDelete.toLowerCase()
      );
      await deleteDoc(docRef);

      setBucketList((prev) =>
        prev.filter((country) => country.name.common !== nameToDelete)
      );
    } catch (err) {
      console.error("Error deleting country from bucket list:", err);
    }
  }

  if (!user) {
    return (
      <p className="text-white text-center mt-10">
        Please log in to view your bucket list.
      </p>
    );
  }

  if (loading) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">My Bucket List</h2>
      <div className="flex flex-wrap justify-evenly gap-4">
        {bucketList.length > 0 ? (
          bucketList
            .filter((country) => country.name?.common)
            .map((country) => (
              <CountryCard
                key={country.name.common}
                country={country}
                onDelete={handleDelete}
                isFromBucketListContext={true}
              />
            ))
        ) : (
          <p className="text-center">No countries added yet.</p>
        )}
      </div>
    </div>
  );
}
