import { Link } from "react-router";
import type { Country } from "../@types/Country";

type Props = {
  country: Country;
};

export default function CountryCard({ country }: Props) {
  return (
    <div className="border-2 border-white rounded-lg p-4 bg-gray-100 bg-opacity-10 w-full sm:w-80">
      <h2 className="text-xl font-bold text-black mb-2 text-center">
        {country.name.common}
      </h2>
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="w-full h-48 object-cover mb-3 rounded"
      />
      <div className="flex justify-center mt-4">
        <Link
          to={`/country/${encodeURIComponent(country.name.common)}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded transition duration-200"
        >
          More Info
        </Link>
      </div>
    </div>
  );
}
