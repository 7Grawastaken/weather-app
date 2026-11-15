import type { JSX } from "react/jsx-runtime";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../slices/locationSlice";

export default function SearchBar(): JSX.Element {
  const [locationInput, setLocationInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <Search
        className="size-5 shrink-0 cursor-pointer"
        onClick={() => dispatch(setLocation(locationInput))}
      />
      <input
        type="text"
        value={locationInput}
        onChange={(e) => setLocationInput(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && dispatch(setLocation(locationInput))
        }
        name="SearchBar"
        id="searchBar"
        placeholder="Search for places..."
        className="placeholder:text-black focus:outline-none font-medium min-w-0 flex-1"
      />
    </div>
  );
}
