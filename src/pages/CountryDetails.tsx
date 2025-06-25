import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCountryContext } from "../context/CountryContext";
import type { Country } from "../@types/Country";

export default function CountryDetails() {
  const { name } = useParams();
  const { countries, fetchCountries } = useCountryContext();

  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState("");

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
      <h1 className="text-3xl font-bold mb-4 text-center">
        {country.name.common}
      </h1>
      <img
        src={country.flags.png}
        alt={country.flags.alt || "Country flag"}
        className="w-60 h-40 object-cover rounded mb-4"
      />
      <ul className="text-lg space-y-2 text-center">
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
