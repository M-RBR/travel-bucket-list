import type { Country } from "../@types/Country";

type Props = {
  country: Country;
};

export default function CountryCard({ country }: Props) {
  return (
    <div className="border-2 border-white rounded-lg p-4 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 w-full sm:w-80">
      <h2 className="text-xl font-bold text-white mb-2">
        {country.name.common}
      </h2>
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="w-full h-48 object-cover mb-3 rounded"
      />
    </div>
  );
}
