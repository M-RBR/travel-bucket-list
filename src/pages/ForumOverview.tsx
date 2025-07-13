import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import { Link } from "react-router";

export default function Forum() {
  const authContext = useAuth();
  const currentUser = authContext.user;

  const [countriesWhereUserPosted, setCountriesWhereUserPosted] = useState<
    string[]
  >([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    async function getCountriesWhereUserHasPosted() {
      if (!currentUser) {
        return;
      }

      const userEmail = currentUser.email;
      const messagesCollection = collectionGroup(db, "messages");
      const messagesQuery = query(
        messagesCollection,
        where("sender", "==", userEmail)
      );

      const querySnapshot = await getDocs(messagesQuery);

      const uniqueCountryNames = new Set<string>();

      querySnapshot.forEach((document) => {
        const documentReference = document.ref;
        const parentCollectionReference = documentReference.parent;
        const grandparentDocumentReference = parentCollectionReference.parent;

        if (grandparentDocumentReference) {
          const countryId = grandparentDocumentReference.id;
          uniqueCountryNames.add(countryId);
        }
      });

      const sortedCountryNames = Array.from(uniqueCountryNames).sort();
      setCountriesWhereUserPosted(sortedCountryNames);
      setIsLoadingData(false);
    }

    getCountriesWhereUserHasPosted();
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-900 p-6 text-center text-white text-xl">
        <p>You need to be logged in to see the forum page.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-900 bg-cover bg-center bg-no-repeat text-white p-12">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
              <h1 className="text-3xl font-bold text-center text-white mb-4">
                Forum List
              </h1>
              <p className="text-center mb-6">
                These are the forums where you have posted messages:
              </p>

              {isLoadingData ? (
                <div className="text-center">
                  <p className="text-white">
                    Please wait, we're loading your forums...
                  </p>
                </div>
              ) : countriesWhereUserPosted.length === 0 ? (
                <div className="text-center">
                  <p className="text-gray-300">
                    It looks like you haven't posted in any forums yet.
                  </p>
                </div>
              ) : (
                <div>
                  <ul className="list-disc list-inside pl-6 space-y-2 text-white">
                    {countriesWhereUserPosted.map((countryName) => {
                      return (
                        <li key={countryName} className="mb-2">
                          <Link
                            to={`/forum/${encodeURIComponent(countryName)}`}
                            className="text-blue-400 hover:text-blue-300 underline text-lg"
                          >
                            {countryName}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
