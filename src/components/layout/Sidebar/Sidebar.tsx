import type { JSX } from "react/jsx-runtime";
import SearchBar from "../../sidebar/SearchBar/SearchBar";
import CurrentWeather from "../../sidebar/CurrentWeather/CurrentWeather";
import LocationCard from "../../sidebar/LocationCard/LocationCard";

export default function Sidebar(): JSX.Element {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 content-between">
      <div className="md:col-span-2 lg:col-span-1">
        <SearchBar />
      </div>
      <CurrentWeather />
      <LocationCard />
    </div>
  );
}
