import type { JSX } from "react/jsx-runtime";
import cityImg from "../../../assets/city.jpg";
import { useWeatherData } from "../../../hooks/useWeatherData";

export default function LocationCard(): JSX.Element {
  const { data } = useWeatherData();

  return (
    <div
      className="rounded-xl py-8 bg-cover bg-center lg:bg-top text-white mt-10 hover:scale-101 duration-300"
      style={{ backgroundImage: `url(${cityImg})` }}
    >
      <p className="text-center font-bold">{data?.resolvedAddress}</p>
    </div>
  );
}
