import type { JSX } from "react/jsx-runtime";

export default function HumidityCard(): JSX.Element {
  return (
    <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
      <h1 className="text-gray-400">Humidity</h1>
      <span className="text-5xl">
        12<span className="align-super text-xl"> %</span>
      </span>
      <p>Normal</p>
    </div>
  );
}
