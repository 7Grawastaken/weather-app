import type { JSX } from "react/jsx-runtime";
import { useWeatherData } from "../../../services/WeatherDataContext";

export default function LocationCard(): JSX.Element {
  const data = useWeatherData();

  return (
    <div className="rounded-xl py-8 bg-[url('src/assets/city.jpg')] bg-cover text-white mt-10 hover:scale-101 duration-300">
      <p className="text-center font-bold">{data.resolvedAddress}</p>
    </div>
  );
}
