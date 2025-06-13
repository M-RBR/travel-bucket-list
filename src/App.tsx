import { useEffect, useState } from "react";
import type { APIError, Country, CountryData } from "./@types/Country";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");

  async function fetchData() {
    setError("");
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,languages,currencies,independent"
      );
      if (response.ok) {
        const data: CountryData = await response.json();
        console.log("Fetched countries:", data);
        console.log("Sample country:", data[0]);
        console.log("Independent field example:", data[0].independent);
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

  return (
    <div className="min-h-screen p-4">
      {error && <p className="text-red-500">{error}</p>}
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Travel Bucket List
      </h1>
      {!error && (
        <div className="flex flex-wrap justify-evenly gap-4 p-4">
          {countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
