import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { useCountryContext } from "../context/CountryContext";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import type { Country } from "../@types/Country";

export default function CountryDetails() {
  const { name } = useParams();
  const { countries, fetchCountries } = useCountryContext();
  const { user } = useAuth();

  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    async function loadCountry() {
      if (countries.length === 0) {
        await fetchCountries();
      }

      const matchedCountry = countries.find(
        (c) => c.name.common.toLowerCase() === (name || "").toLowerCase()
      );

      if (!matchedCountry) {
        setError("Country not found.");
      } else {
        setCountry(matchedCountry);
      }
    }

    loadCountry();
  }, [countries, name]);

  async function handleAddToBucketList() {
    if (!user || !country) {
      localStorage.setItem("returnTo", window.location.pathname);
      setShowModal(true);
      return;
    }

    try {
      const bucketDocRef = doc(
        db,
        "users",
        user.uid,
        "bucketList",
        country.name.common.toLowerCase()
      );

      await setDoc(bucketDocRef, {
        name: { common: country.name.common },
        flags: {
          png: country.flags.png,
          alt: country.flags.alt || "",
        },
        region: country.region,
        capital: country.capital || [],
        subregion: country.subregion || "",
        languages: country.languages || {},
        currencies: country.currencies || {},
        independent: country.independent ?? false,
      });

      setSuccessMsg(`${country.name.common} added to your bucket list!`);
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error("Error adding to Firestore:", err);
      setError("Failed to add to your bucket list. Try again later.");
    }
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!country) {
    return <p className="text-white text-center">Loading country details...</p>;
  }

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c: any) => c.name)
        .join(", ")
    : "N/A";

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <div className="bg-gray-700 p-10 w-full max-w-2xl rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-center">
          {country.name.common}
        </h1>
        <img
          src={country.flags.png}
          alt={country.flags.alt || "Country flag"}
          className="w-60 h-40 object-cover rounded mb-4 mx-auto"
        />
        <ul className="text-lg space-y-2 text-center mb-6">
          <li>
            <strong>Capital(s):</strong>{" "}
            {country.capital?.length ? country.capital.join(", ") : "None"}
          </li>
          <li>
            <strong>Region:</strong> {country.region}
          </li>
          <li>
            <strong>Subregion:</strong> {country.subregion || "N/A"}
          </li>
          <li>
            <strong>Language(s):</strong> {languages}
          </li>
          <li>
            <strong>Currency:</strong> {currencies}
          </li>
          <li>
            <strong>Independence status:</strong>{" "}
            {country.independent ? "Independent" : "Not Independent"}
          </li>
        </ul>

        {successMsg && (
          <p className="text-green-400 text-center mb-4">{successMsg}</p>
        )}

        <div className="flex flex-col items-center gap-4 w-full">
          <button
            onClick={handleAddToBucketList}
            className="w-full flex justify-center items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold text-lg sm:text-xl px-6 py-3 rounded-md shadow transition"
          >
            Add to your bucket list <span className="ml-2">⭐</span>
          </button>
          <Link
            to="/explore"
            className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg sm:text-xl px-6 py-3 rounded-md shadow transition"
          >
            <span className="mr-2">←</span> Go back exploring
          </Link>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-gray-900 p-6 rounded-lg max-w-sm text-center shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Log in required</h3>
            <p className="mb-4">
              Please log in to add countries to your bucket list.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Sign Up
              </Link>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-sm text-blue-600 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
