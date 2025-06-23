import { useEffect, useState } from "react";
import type { APIError, Country, CountryData } from "../@types/Country";
import CountryCard from "../components/CountryCard";

export default function Explore() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [onlyNonIndependent, setOnlyNonIndependent] = useState<boolean>(false);

  async function fetchData() {
    setError("");
    setLoading(true);
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,languages,currencies,independent,demonyms,subregion"
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
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Extract unique languages
  const allLanguages = Array.from(
    new Set(
      countries.flatMap((country) => Object.values(country.languages || {}))
    )
  ).sort();

  // Extract unique regions
  const allRegions = Array.from(
    new Set(countries.map((country) => country.region))
  ).sort();

  // Extract unique currencies
  const allCurrencies = Array.from(
    new Set(
      countries.flatMap((country) =>
        country.currencies
          ? Object.values(country.currencies).map((c) => c.name)
          : []
      )
    )
  ).sort();

  // Combined filters
  const filteredCountries = countries.filter((country) => {
    const matchesLanguage =
      selectedLanguage === "" ||
      Object.values(country.languages || {}).includes(selectedLanguage);

    const matchesRegion =
      selectedRegion === "" || country.region === selectedRegion;

    const matchesCurrency =
      selectedCurrency === "" ||
      Object.values(country.currencies || {})
        .map((c) => c.name)
        .includes(selectedCurrency);

    const matchesIndependence =
      !onlyNonIndependent || country.independent === false;

    return (
      matchesLanguage && matchesRegion && matchesCurrency && matchesIndependence
    );
  });

  return (
    <div className="min-h-screen bg-gray-900  p-4">
      {error && <p className="text-red-500">{error}</p>}

      <h1 className="text-3xl font-bold text-center text-white mb-4">
        Explore Countries
      </h1>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        {/* Language filter */}
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="p-2 rounded bg-gray-500 text-white"
        >
          <option value="">Filter by language</option>
          {allLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        {/* Region filter */}
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="p-2 rounded bg-gray-500 text-white"
        >
          <option value="">Filter by region</option>
          {allRegions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        {/* Currency filter */}
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="p-2 rounded bg-gray-500 text-white"
        >
          <option value="">Filter by currency</option>
          {allCurrencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <label className="text-white flex items-center justify-center gap-2">
        <input
          type="checkbox"
          checked={onlyNonIndependent}
          onChange={(e) => setOnlyNonIndependent(e.target.checked)}
        />
        Show only non-independent countries
      </label>

      {loading ? (
        <p className="text-white text-center mt-10 text-xl animate-pulse">
          Loading countries...
        </p>
      ) : (
        <div className="flex flex-wrap justify-evenly gap-4 p-4">
          {filteredCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
