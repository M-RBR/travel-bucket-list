import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import type { Country } from "../@types/Country";

export default function BucketList() {
  const { user } = useAuth();
  const [bucketList, setBucketList] = useState<Country[]>([]);

  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(user.uid);
      if (saved) setBucketList(JSON.parse(saved));
    }
  }, [user]);

  if (!user) {
    return (
      <p className="text-white text-center mt-10">
        Please log in to view your bucket list.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">My Bucket List</h2>
      <div className="flex flex-wrap justify-evenly gap-4">
        {bucketList.length > 0 ? (
          bucketList.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))
        ) : (
          <p className="text-center">No countries added yet.</p>
        )}
      </div>
    </div>
  );
}
