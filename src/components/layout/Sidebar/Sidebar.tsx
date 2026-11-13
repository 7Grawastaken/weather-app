import type { JSX } from "react/jsx-runtime";
import SearchBar from "../../sidebar/SearchBar/SearchBar";
import CurrentWeather from "../../sidebar/CurrentWeather/CurrentWeather";
import LocationCard from "../../sidebar/LocationCard/LocationCard";

interface SidebarProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sidebar({ setLocation }: SidebarProps): JSX.Element {
  return (
    <div className="p-10 flex flex-col justify-between">
      <SearchBar setLocation={setLocation} />
      <CurrentWeather />
      <LocationCard />
    </div>
  );
}
