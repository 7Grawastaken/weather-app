import type { JSX } from "react/jsx-runtime";
import { MapPin } from "lucide-react";
import { useWeatherData } from "../../../services/WeatherDataContext";
import { useUnits } from "../../../services/WeatherDataContext";

const COMPASS_POINTS = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
];

function degreesToCompass(deg: number): string {
  const index = Math.round((((deg % 360) + 360) % 360) / 22.5) % 16;
  return COMPASS_POINTS[index];
}

export default function WindCard(): JSX.Element {
  const data = useWeatherData();
  const windspeed = data?.currentConditions?.windspeed;
  const winddir = data?.currentConditions?.winddir;
  const units = useUnits();

  return (
    <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
      <h1 className="text-gray-400">Wind Status</h1>
      {windspeed != null ? (
        <>
          <span className="text-5xl">
            {windspeed}
            <span className="text-xl"> {units.speed}</span>
          </span>
          {winddir != null && (
            <div className="flex gap-2">
              <MapPin className="fill-blue-600 text-white" />
              {degreesToCompass(winddir)}
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-400">No wind data available</p>
      )}
    </div>
  );
}
