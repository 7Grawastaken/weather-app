import { useState, type JSX } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchWeather } from "./services/weatherApi";
import type { WeatherData } from "./types/DataJSON";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainPanel from "./components/layout/MainPanel/MainPanel";
import { WeatherDataProvider } from "./services/WeatherDataContext";
import FullScreenSpinnerLoading from "./components/Loaders/FullScreenSpinnerLoading";
import ErrorState from "./components/ErrorState/ErrorState";

const DEFAULT_LOCATION = "London";

export default function App(): JSX.Element {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [selectedUnit, setSelectedUnit] = useState<"metric" | "us">("metric");

  const { data, isFetching, isError, error } = useQuery<WeatherData>({
    queryKey: ["weather", location, selectedUnit],
    queryFn: () => fetchWeather(location, selectedUnit),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <div className="bg-[#D6D7DB] min-h-screen flex items-center justify-center">
      <div className="bg-white lg:rounded-4xl border border-gray-400 flex flex-col lg:flex-row gap-0 relative z-10 w-full lg:w-[60%] lg:max-w-[60%] lg:h-209">
        {isFetching && !isError && <FullScreenSpinnerLoading />}

        {isError ? (
          <ErrorState
            message={error instanceof Error ? error.message : undefined}
            onGoBack={() => setLocation(DEFAULT_LOCATION)}
          />
        ) : (
          <WeatherDataProvider value={{ data, selectedUnit }}>
            <Sidebar setLocation={setLocation} />
            <MainPanel
              setSelectedUnit={setSelectedUnit}
              selectedUnit={selectedUnit}
            />
          </WeatherDataProvider>
        )}
      </div>
    </div>
  );
}
