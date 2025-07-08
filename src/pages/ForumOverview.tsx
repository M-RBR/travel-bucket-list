import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import { Link } from "react-router";

export default function Forum() {
  const { user } = useAuth();
  const [postedCountries, setPostedCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPostedCountries = async () => {
      if (!user) return;

      const q = query(
        collectionGroup(db, "messages"),
        where("sender", "==", user.email)
      );

      const snapshot = await getDocs(q);

      const countriesSet = new Set<string>();
      snapshot.forEach((doc) => {
        const countryName = doc.ref.parent.parent?.id;
        if (countryName) countriesSet.add(countryName);
      });

      setPostedCountries(Array.from(countriesSet).sort());
      setLoading(false);
    };

    loadPostedCountries();
  }, [user]);

  if (!user)
    return (
      <div className="min-h-screen bg-gray-900 p-6 text-center text-white text-xl">
        <p>Please log in to view forum.</p>
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-gray-900 bg-cover bg-center bg-no-repeat text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
              <h1 className="text-3xl font-bold text-center text-white mb-4">
                Forums you have posted in:
              </h1>

              {loading ? (
                <p className="text-white text-center">Loading forums...</p>
              ) : postedCountries.length === 0 ? (
                <p className="text-gray-300 text-center">
                  You haven't posted in any forum yet.
                </p>
              ) : (
                <ul className="list-disc list-inside pl-6 space-y-2 text-white">
                  {postedCountries.map((country) => (
                    <li key={country}>
                      <Link
                        to={`/chat/${encodeURIComponent(country)}`}
                        className="text-blue-400 hover:text-blue-300 underline text-lg"
                      >
                        {country}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
