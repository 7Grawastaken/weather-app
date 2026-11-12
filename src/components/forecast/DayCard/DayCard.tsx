import type { JSX } from "react/jsx-runtime";

interface DayCardProps {
  day: string;
}

export default function DayCard({ day }: DayCardProps): JSX.Element {
  return (
    <div className="bg-white rounded-xl flex flex-col items-center justify-center gap-y-4 py-2 px-5 hover:scale-105 duration-300">
      <h1>{day}</h1>
      <div className="size-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,#ffdf4a_0%,#fed44f_60%,#fdd05a_100%)] shadow-[0_0_14px_4px_rgba(255,214,80,0.35)]" />
      <div className="flex">
        <p>
          15<span>°</span>
        </p>
        <p className="text-gray-400">
          -3<span>°</span>
        </p>
      </div>
    </div>
  );
}
