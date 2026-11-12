import type { JSX } from "react/jsx-runtime";
import { MapPin } from "lucide-react";

export default function WindCard(): JSX.Element {
  return (
    <div>
      <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
        <h1 className="text-gray-400">Wind Status</h1>
        <span className="text-5xl">7.70 km/h</span>
        <div className="flex gap-2">
          <MapPin className="fill-blue-600 text-white" />
          WSW
        </div>
      </div>
    </div>
  );
}
