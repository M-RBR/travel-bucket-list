import { useEffect, useState } from "react";
import type { APIError, Country, CountryData } from "../@types/Country";
import CountryCard from "../components/CountryCard";

export default function Explore() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  async function fetchData() {
    setError("");
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,languages,currencies,independent"
      );
      if (response.ok) {
        const data: CountryData = await response.json();
        setCountries(data);
      } else {
        const data: APIError = await response.json();
        setError(data.error || "An error occurred while fetching data.");
      }
    } catch (error: unknown) {
      setError("Failed to fetch country data.");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const allLanguages = Array.from(
    new Set(
      countries.flatMap((country) => Object.values(country.languages || {}))
    )
  ).sort();

  const filteredCountries = countries.filter(
    (country) =>
      selectedLanguage === "" ||
      Object.values(country.languages || {}).includes(selectedLanguage)
  );

  return (
    <div className="min-h-screen p-4">
      {error && <p className="text-red-500">{error}</p>}

      <h1 className="text-3xl font-bold text-center text-white mb-4">
        Explore Countries
      </h1>

      <div className="flex justify-center mb-8">
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="p-2 rounded text-black"
        >
          <option value="">Select a Language</option>
          {allLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-evenly gap-4 p-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
}
