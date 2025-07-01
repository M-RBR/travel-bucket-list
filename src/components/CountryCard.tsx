import { Link } from "react-router";
import type { Country } from "../@types/Country";

type Props = {
  country: Country;
  onDelete?: (name: string) => void;
};

export default function CountryCard({ country, onDelete }: Props) {
  const handleRemove = () => {
    if (onDelete && country.name?.common) {
      onDelete(country.name.common);
    }
  };

  return (
    <div className="border-2 border-white rounded-lg p-4 bg-gray-100 bg-opacity-10 w-full sm:w-80">
      <h2 className="text-xl font-bold text-black mb-2 text-center">
        {country.name.common}
      </h2>
      <img
        src={country.flags.png}
        alt={country.flags.alt || `Flag of ${country.name.common}`}
        className="w-full h-48 object-cover mb-3 rounded"
      />

      <div className="flex flex-col gap-2 mt-4 items-center">
        <div className="w-8/12 sm:w-3/4 flex flex-col gap-2">
          <Link
            to={`/country/${encodeURIComponent(country.name.common)}`}
            state={{ fromBucketList: true }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 rounded transition duration-200 text-center"
          >
            More Info
          </Link>

          {onDelete && (
            <button
              onClick={handleRemove}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded transition duration-200"
            >
              Remove from Bucket List
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
