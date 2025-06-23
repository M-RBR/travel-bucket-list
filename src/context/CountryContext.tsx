import { createContext, useContext, useEffect, useState } from "react";
import type { Country } from "../@types/Country";

interface CountryContextType {
  countries: Country[];
  setCountries: (countries: Country[]) => void;
  fetchCountries: () => Promise<void>;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [countries, setCountries] = useState<Country[]>([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,languages,currencies,independent,demonyms,subregion"
      );
      if (!response.ok) throw new Error("Failed to fetch countries");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Country fetch failed", error);
    }
  };

  useEffect(() => {
    if (countries.length === 0) fetchCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{ countries, setCountries, fetchCountries }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export function useCountryContext() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
}
