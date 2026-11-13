import type { JSX } from "react/jsx-runtime";
import type { CurrentConditions } from "../../../types/DataJSON";
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
  type LucideIcon,
} from "lucide-react";

interface DayCardProps {
  hour: CurrentConditions;
}

const ICONS: Record<string, { Icon: LucideIcon; color: string }> = {
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

export default function HourlyCard({ hour }: DayCardProps): JSX.Element {
  const time = new Date(hour.datetimeEpoch * 1000).toLocaleTimeString("en-US", {
    hour12: false,
  });

  const { Icon, color } = ICONS[hour.icon] ?? ICONS["cloudy"];

  return (
    <div className="bg-white rounded-xl flex flex-col items-center justify-center gap-y-4 py-2 px-5 hover:-translate-y-1 duration-300">
      <h1>{time}</h1>
      <Icon className={`size-10 ${color}`} />
      <div className="flex gap-1">
        <p>{Math.round(hour.temp ?? 0)}°</p>
      </div>
    </div>
  );
}
