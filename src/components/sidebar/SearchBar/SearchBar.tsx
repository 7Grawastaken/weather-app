import type { JSX } from "react/jsx-runtime";
import { Search } from "lucide-react";
import { useState } from "react";
import { useWeatherData } from "../../../services/WeatherDataContext";

interface SearchBarProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({
  setLocation,
}: SearchBarProps): JSX.Element {
  const data = useWeatherData();
  console.log(data);
  const [locationInput, setLocationInput] = useState("");

  return (
    <div className="flex items-center gap-2">
      <Search
        className="size-5 cursor-pointer"
        onClick={() => setLocation(locationInput)}
      />
      <input
        type="text"
        value={locationInput}
        onChange={(e) => setLocationInput(e.target.value)}
        name="SearchBar"
        id="searchBar"
        placeholder="Search for places..."
        className="placeholder:text-black focus:outline-none font-medium"
      />
    </div>
  );
}
