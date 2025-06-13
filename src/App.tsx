import { useEffect, useState } from "react";
import type { APIError, Country, CountryData } from "./@types/Country";
import CountryCard from "./components/CountryCard";

function App() {
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
        console.log("Fetched countries:", data);
        setCountries(data);
      } else {
        const data: APIError = await response.json();
        setError(data.error || "An error occurred while fetching data.");
      }
    } catch (error: unknown) {
      console.log("Failed to fetch", error);
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

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
    console.log("Selected Language:", event.target.value);
  };

  return (
    <div className="min-h-screen p-4">
      {error && <p className="text-red-500">{error}</p>}

      <h1 className="text-3xl font-bold text-center text-white mb-4">
        🌍 Travel Bucket List ✈️
      </h1>

      <p className="text-center text-white mb-6">
        Discover countries around the world or filter by language.
      </p>

      {/* Language Filter Dropdown */}
      <div className="flex justify-center mb-8">
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
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

      {/* Display filtered countries */}
      {!error && (
        <div className="flex flex-wrap justify-evenly gap-4 p-4">
          {filteredCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
