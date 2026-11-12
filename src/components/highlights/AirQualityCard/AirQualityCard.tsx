import type { JSX } from "react/jsx-runtime";

export default function AirQualityCard(): JSX.Element {
  return (
    <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
      <h1 className="text-gray-400">Air Quality</h1>
      <span className="text-5xl">105</span>
      <p>Unhealthy</p>
    </div>
  );
}
