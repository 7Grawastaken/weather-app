import type { JSX } from "react/jsx-runtime";

export default function SunriseSunsetCard(): JSX.Element {
  return (
    <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
      <h1 className="text-gray-400">Sunrise & Sunset</h1>
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <img
            src="src/assets/sunrise.svg"
            alt="Sunrise Time"
            className="size-12"
          />
          <div className="flex flex-col">
            <span>6:35 AM</span>
            <span className="text-gray-400 text-xs">-1m 46s</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="src/assets/sunset.svg"
            alt="Sunset Time"
            className="size-12"
          />
          <div className="flex flex-col">
            <span>5:42 PM</span>
            <span className="text-gray-400 text-xs">+2m 22s</span>
          </div>
        </div>
      </div>
    </div>
  );
}
