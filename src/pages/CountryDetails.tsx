import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Country } from "../@types/Country";

export default function CountryDetails() {
  const { name } = useParams(); // React Router usually decodes this automatically
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,languages,currencies,independent,demonyms,subregion"
        );
        if (!res.ok) throw new Error("Failed to fetch country data."); // More descriptive error
        const data: Country[] = await res.json();

        // Match by the common name directly, assuming useParams already decoded it
        const matchedCountry = data.find(
          (c) => c.name.common.toLowerCase() === (name || "").toLowerCase()
        );

        if (!matchedCountry) {
          setError("Country not found."); // This error remains useful if no match
        } else {
          setCountry(matchedCountry);
        }
      } catch (err) {
        console.error("Fetch error:", err); // Log the actual error for debugging
        setError("Failed to fetch country data.");
      }
    }

    fetchCountry();
  }, [name]); // Dependency array is correct

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!country) {
    return <p className="text-white text-center">Loading country details...</p>;
  }

  // Rest of your component remains the same
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
      <h1 className="text-3xl font-bold mb-4 text-center">
        {country.name.common}
      </h1>
      <img
        src={country.flags.png}
        alt={country.flags.alt || "Country flag"}
        className="w-60 h-40 object-cover rounded mb-4"
      />
      <ul className="text-lg space-y-2">
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
    </div>
  );
}
