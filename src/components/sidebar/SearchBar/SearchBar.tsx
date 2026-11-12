import type { JSX } from "react/jsx-runtime";
import { Search } from "lucide-react";

export default function SearchBar(): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <Search className="size-5 cursor-pointer" />
      <input
        type="text"
        name="SearchBar"
        id="searchBar"
        placeholder="Search for places..."
        className="placeholder:text-black focus:outline-none font-medium"
      />
    </div>
  );
}
