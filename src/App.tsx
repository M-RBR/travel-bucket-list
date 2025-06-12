import { useEffect, useState } from "react";
import type { APIError, Country, CountryData } from "./@types/Country";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");

  async function fetchData() {
    setError("");
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,languages,currencies"
      );
      if (response.ok) {
        const data: CountryData = await response.json();
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
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h1>Explore Countries</h1>
      {!error && (
        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <img src={country.flags.png} alt={country.flags.alt} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
