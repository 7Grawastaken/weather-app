import type { JSX } from "react/jsx-runtime";

export default function HeaderMainPanel(): JSX.Element {
  return (
    <div className="flex justify-between mb-15">
      <div className="flex gap-5">
        <button className="text-gray-400 no-underline cursor-pointer">
          Today
        </button>
        <button className="underline underline-offset-7 decoration-gray-600 decoration-2 cursor-pointer">
          Week
        </button>
      </div>
      <div className="flex gap-5">
        <button className="rounded-full bg-black text-white px-2 py-1.5 text-sm cursor-pointer">
          <span className="font-bold">°</span>C
        </button>
        <button className="rounded-full bg-white text-black px-2 text-sm border cursor-pointer">
          <span className="font-bold">°</span>F
        </button>
      </div>
    </div>
  );
}
