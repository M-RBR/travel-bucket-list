import type { Country } from "../@types/Country";

type Props = {
  country: Country;
};

export default function CountryCard({ country }: Props) {
  return (
    <div className="border-2 border-white rounded-lg p-4 bg-gray-100 bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 w-full sm:w-80">
      <h2 className="text-xl font-bold text-black mb-2 text-center">
        {country.name.common}
      </h2>
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="w-full h-48 object-cover mb-3 rounded"
      />
      <p className="text-black text-center">
        Capital City:{" "}
        {country.capital && country.capital.length > 0
          ? country.capital.join(", ")
          : "None"}
      </p>
    </div>
  );
}
