import type { JSX } from "react/jsx-runtime";
import weatherIcon from "../../../assets/weather-icon.svg";

import {
  Sun,
  Moon,
  Cloud,
  CloudSun,
  CloudMoon,
  CloudRain,
  CloudSnow,
  CloudFog,
  Wind,
  CloudLightning,
  WavesVertical,
  type LucideIcon,
} from "lucide-react";
import { useWeatherData } from "../../../services/WeatherDataContext";
import { useUnits } from "../../../services/WeatherDataContext";

const WEATHER_ICONS: Record<string, { Icon: LucideIcon; color: string }> = {
  "clear-day": { Icon: Sun, color: "text-yellow-400" },
  "clear-night": { Icon: Moon, color: "text-indigo-400" },
  "partly-cloudy-day": { Icon: CloudSun, color: "text-amber-400" },
  "partly-cloudy-night": { Icon: CloudMoon, color: "text-indigo-300" },
  cloudy: { Icon: Cloud, color: "text-gray-400" },
  rain: { Icon: CloudRain, color: "text-blue-500" },
  snow: { Icon: CloudSnow, color: "text-sky-300" },
  fog: { Icon: CloudFog, color: "text-gray-400" },
  wind: { Icon: Wind, color: "text-teal-400" },
  thunderstorm: { Icon: CloudLightning, color: "text-purple-500" },
};

export default function CurrentWeather(): JSX.Element {
  const data = useWeatherData();
  const units = useUnits();
  const unFormatedDate =
    data && new Date(data.currentConditions.datetimeEpoch * 1000);
  const day =
    data && unFormatedDate?.toLocaleDateString("en-US", { weekday: "long" });
  const date = data && unFormatedDate?.toLocaleDateString("en-US");

  const { Icon: ConditionIcon, color } =
    WEATHER_ICONS[data?.currentConditions.icon ?? ""] ?? WEATHER_ICONS.cloudy;

  return (
    <div className="flex flex-col justify-center">
      <img src={weatherIcon} alt="Weather Icon" className="w-64 h-64" />
      <h1 className="text-7xl font-extralight mb-5">
        {data?.currentConditions.temp}
        <span className="font-medium text-5xl align-top">°</span>
        <span className="align-top font-light text-5xl">{units.temp}</span>
      </h1>
      <p className="flex gap-2">
        {day},<span className="text-[#C9C9C9]">{date}</span>
      </p>

      <hr className="text-gray-200 my-5" />

      <p className="flex gap-2 text-xs items-center font-medium mb-2">
        <ConditionIcon className={`${color} size-6`} />
        {data?.currentConditions.conditions}
      </p>
      <p className="flex gap-2 text-xs items-center font-medium">
        <WavesVertical className="text-blue-700" />
        Rain - <span>{data?.currentConditions.precipprob}%</span>
      </p>
    </div>
  );
}
