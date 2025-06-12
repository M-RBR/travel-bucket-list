import type { Country } from "../@types/Country";

type Props = {
  country: Country;
};

export default function CountryCard({ country }: Props) {
  return (
    <div style={{ border: "solid white 1px", padding: "1em" }}>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
}
