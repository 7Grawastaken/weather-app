import { type JSX } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "./services/weatherApi";
import type { WeatherData } from "./types/DataJSON";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainPanel from "./components/layout/MainPanel/MainPanel";
import WeatherSkeleton from "./components/Loaders/WeatherSkeleton";
import { WeatherDataProvider } from "./services/WeatherDataContext";

function App(): JSX.Element {
  const { data, isPending, isError } = useQuery<WeatherData>({
    queryKey: ["weather"],
    queryFn: () => fetchWeather("United Arab Emirates", "metric"),
  });
  if (data) console.log(data);

  return (
    <div className="bg-[#D6D7DB] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-4xl border border-gray-400 flex gap-0 relative z-10 w-[60%]">
        {isPending && <WeatherSkeleton />}
        {isError && <p className="p-8">Failed to load weather data.</p>}
        {data && (
          <WeatherDataProvider value={data}>
            <Sidebar />
            <MainPanel />
          </WeatherDataProvider>
        )}
      </div>
    </div>
  );
}

export default App;
