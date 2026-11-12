import type { JSX } from "react/jsx-runtime";
import SearchBar from "../../sidebar/SearchBar/SearchBar";
import CurrentWeather from "../../sidebar/CurrentWeather/CurrentWeather";
import LocationCard from "../../sidebar/LocationCard/LocationCard";

export default function Sidebar(): JSX.Element {
  return (
    <div className="p-10">
      <SearchBar />
      <CurrentWeather />
      <LocationCard />
    </div>
  );
}
