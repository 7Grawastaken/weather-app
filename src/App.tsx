import { type JSX } from "react";
import { fetchWeather } from "./services/weatherApi";
import { useQuery } from "@tanstack/react-query";
import type { WeatherData } from "./types/DataJSON";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainPanel from "./components/layout/MainPanel/MainPanel";

function App(): JSX.Element {
  const { data } = useQuery<WeatherData>({
    queryKey: ["weather"],
    queryFn: () => fetchWeather("New York", "metric"),
  });
  if (data) console.log(data);

  return (
    <div className="bg-[#D6D7DB] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl border border-gray-400 flex gap-0">
        <Sidebar />
        <MainPanel />
      </div>
    </div>
  );
}

export default App;
