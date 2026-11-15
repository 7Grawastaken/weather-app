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
  day: CurrentConditions;
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

export default function DayCard({ day }: DayCardProps): JSX.Element {
  const dayName = new Date(day.datetime).toLocaleDateString("en-US", {
    weekday: "short",
  });

  const { Icon, color } = ICONS[day.icon] ?? ICONS["cloudy"];

  return (
    <div className="bg-white rounded-xl flex flex-col items-center justify-center gap-y-4 py-2 px-5 hover:scale-105 duration-300">
      <h1 className="text-base">{dayName}</h1>
      <Icon className={`size-10 ${color}`} />
      <div className="flex gap-1">
        <p>{Math.round(day.tempmax ?? 0)}°</p>
        <p className="text-gray-400">{Math.round(day.tempmin ?? 0)}°</p>
      </div>
    </div>
  );
}
