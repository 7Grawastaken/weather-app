import type { JSX } from "react/jsx-runtime";

export default function UvIndexCard(): JSX.Element {
  return (
    <div>
      <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
        <h1 className="text-gray-400">UV Index</h1>
        <span className="text-5xl">5/12</span>
        <p>Graph Coming soon</p>
      </div>
    </div>
  );
}
