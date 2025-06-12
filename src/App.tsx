import { useEffect, useState } from "react";
import type { Country, CountryData } from "./@types/Country";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,languages,currencies"
      );
      const data: CountryData = await response.json();
      console.log();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Explore Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}
            <img src={country.flags.png} alt={country.flags.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
