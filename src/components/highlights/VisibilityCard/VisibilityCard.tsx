import type { JSX } from "react/jsx-runtime";

export default function VisibilityCard(): JSX.Element {
    return (
    <div>
      <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
        <h1 className="text-gray-400">Visibility</h1>
        <span className="text-5xl">5.2 km</span>
        <p>Average</p>
      </div>
    </div>
    )
}