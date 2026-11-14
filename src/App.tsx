import { useState, type JSX } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchWeather } from "./services/weatherApi";
import type { WeatherData } from "./types/DataJSON";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainPanel from "./components/layout/MainPanel/MainPanel";
import { WeatherDataProvider } from "./services/WeatherDataContext";
import FullScreenSpinnerLoading from "./components/Loaders/FullScreenSpinnerLoading";

export default function App(): JSX.Element {
  const [location, setLocation] = useState("United Arab Emirates");
  const [selectedUnit, setSelectedUnit] = useState<"metric" | "us">("metric");

  const { data, isFetching, isError } = useQuery<WeatherData>({
    queryKey: ["weather", location, selectedUnit],
    queryFn: () => fetchWeather(location, selectedUnit),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="bg-[#D6D7DB] min-h-screen flex items-center justify-center">
      <div className="bg-white lg:rounded-4xl border border-gray-400 flex flex-col lg:flex-row gap-0 relative z-10 w-full lg:w-[60%] lg:max-w-[60%] lg:h-209">
        {isFetching && <FullScreenSpinnerLoading />}
        {isError && (
          <p className="p-8 text-red-500">Failed to load weather data.</p>
        )}
        <WeatherDataProvider value={{ data }}>
          <Sidebar setLocation={setLocation} />
          <MainPanel
            setSelectedUnit={setSelectedUnit}
            selectedUnit={selectedUnit}
          />
        </WeatherDataProvider>
      </div>
    </div>
  );
}
