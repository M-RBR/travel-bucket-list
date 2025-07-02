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
  const [shuffledCountries, setShuffledCountries] = useState<any[]>([]);

  // Load countries + restore filters from localStorage
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      if (countries.length === 0) {
        await fetchCountries();
      }

      const savedFilters = JSON.parse(
        localStorage.getItem("exploreFilters") || "{}"
      );
      if (savedFilters) {
        setSelectedLanguage(savedFilters.language || "");
        setSelectedRegion(savedFilters.region || "");
        setSelectedCurrency(savedFilters.currency || "");
        setOnlyNonIndependent(savedFilters.onlyNonIndependent || false);
      }

      setLoading(false);
    };

    load();
  }, []);

  // Save filters to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "exploreFilters",
      JSON.stringify({
        language: selectedLanguage,
        region: selectedRegion,
        currency: selectedCurrency,
        onlyNonIndependent,
      })
    );
  }, [selectedLanguage, selectedRegion, selectedCurrency, onlyNonIndependent]);

  const resetFilters = () => {
    setSelectedLanguage("");
    setSelectedRegion("");
    setSelectedCurrency("");
    setOnlyNonIndependent(false);
    setShuffledCountries([]);
    localStorage.removeItem("exploreFilters");
  };

  const shuffleCountries = () => {
    const filtered = filterCountries(countries);
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledCountries(shuffled);
  };

  const filterCountries = (source: any[]) => {
    return source.filter((country) => {
      const matchesLanguage =
        selectedLanguage === "" ||
        Object.values(country.languages || {}).includes(selectedLanguage);

      const matchesRegion =
        selectedRegion === "" || country.region === selectedRegion;

      const matchesCurrency =
        selectedCurrency === "" ||
        Object.values(country.currencies || {})
          .map((c: any) => c.name)
          .includes(selectedCurrency);

      const matchesIndependence =
        !onlyNonIndependent || country.independent === false;

      return (
        matchesLanguage &&
        matchesRegion &&
        matchesCurrency &&
        matchesIndependence
      );
    });
  };

  const filtered = filterCountries(countries);
  const displayedCountries =
    shuffledCountries.length > 0 ? shuffledCountries : filtered;

  const allLanguages = Array.from(
    new Set(countries.flatMap((c) => Object.values(c.languages || {})))
  ).sort();

  const allRegions = Array.from(new Set(countries.map((c) => c.region))).sort();

  const allCurrencies = Array.from(
    new Set(
      countries.flatMap((c) =>
        c.currencies ? Object.values(c.currencies).map((cur) => cur.name) : []
      )
    )
  ).sort();

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <h1 className="text-3xl font-bold text-center text-white mb-4">
        Explore Countries
      </h1>

      {/* Filter dropdowns */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <select
          value={selectedLanguage}
          onChange={(e) => {
            setSelectedLanguage(e.target.value);
            setShuffledCountries([]);
          }}
          className="p-2 rounded bg-gray-500 text-white"
        >
          <option value="">Filter by language</option>
          {allLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <select
          value={selectedRegion}
          onChange={(e) => {
            setSelectedRegion(e.target.value);
            setShuffledCountries([]);
          }}
          className="p-2 rounded bg-gray-500 text-white"
        >
          <option value="">Filter by region</option>
          {allRegions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        <select
          value={selectedCurrency}
          onChange={(e) => {
            setSelectedCurrency(e.target.value);
            setShuffledCountries([]);
          }}
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

      {/* Checkbox + Buttons */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <label className="text-white flex items-center gap-2">
          <input
            type="checkbox"
            checked={onlyNonIndependent}
            onChange={(e) => {
              setOnlyNonIndependent(e.target.checked);
              setShuffledCountries([]);
            }}
          />
          Show only non-independent countries
        </label>

        <div className="flex flex-col gap-4 w-64">
          <button
            onClick={shuffleCountries}
            className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition w-full"
          >
            Shuffle Countries
          </button>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition w-full"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Country Cards */}
      {loading ? (
        <p className="text-white text-center mt-10 text-xl animate-pulse">
          Loading countries...
        </p>
      ) : displayedCountries.length === 0 ? (
        <p className="text-red-500 text-center mt-10 text-xl">
          No countries found.
        </p>
      ) : (
        <div className="flex flex-wrap justify-evenly gap-4 p-4">
          {displayedCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
