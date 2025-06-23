import { useEffect, useState } from "react";
import { useCountryContext } from "../context/CountryContext";
import CountryCard from "../components/CountryCard";

export default function Explore() {
  const { countries, fetchCountries } = useCountryContext();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [onlyNonIndependent, setOnlyNonIndependent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      if (countries.length === 0) {
        await fetchCountries();
      }
      setLoading(false);
    };
    load();
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

  // Extract unique currencies (use currency names)
  const allCurrencies = Array.from(
    new Set(
      countries.flatMap((country) =>
        country.currencies
          ? Object.values(country.currencies).map((c) => c.name)
          : []
      )
    )
  ).sort();

  // Filter countries based on selected criteria
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
    <div className="min-h-screen bg-gray-900 p-4">
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
