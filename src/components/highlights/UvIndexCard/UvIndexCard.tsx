import type { JSX } from "react/jsx-runtime";
import { useWeatherData } from "../../../hooks/useWeatherData";

const MAX_UV = 12;
const CX = 100;
const CY = 100;
const R = 80;

function uvColor(uv: number): string {
  if (uv < 3) return "#00e400"; // Low
  if (uv < 6) return "#ffd000"; // Moderate
  if (uv < 8) return "#ffb347"; // High
  if (uv < 11) return "#ff4d4d"; // Very high
  return "#8f3f97"; // Extreme
}

// Position of a tick label around the arc (0 = left end, MAX_UV = right end)
function labelPosition(value: number, radius: number) {
  const angle = Math.PI - (value / MAX_UV) * Math.PI;
  return {
    x: CX + radius * Math.cos(angle),
    y: CY - radius * Math.sin(angle),
  };
}

function UvGauge({ value }: { value: number }): JSX.Element {
  const clamped = Math.min(Math.max(value, 0), MAX_UV);
  const percent = (clamped / MAX_UV) * 100;
  const color = uvColor(clamped);

  // Half circle from the left end, over the top, to the right end
  const arc = `M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`;

  return (
    <svg viewBox="-10 0 220 115" className="w-full">
      {/* Background track */}
      <path
        d={arc}
        fill="none"
        stroke="#f0f0f0"
        strokeWidth="18"
        strokeLinecap="round"
        pathLength={100}
      />

      {/* Value arc */}
      {percent > 0 && (
        <path
          d={arc}
          fill="none"
          stroke={color}
          strokeWidth="18"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={`${percent} 100`}
          style={{
            filter: `drop-shadow(0 0 6px ${color}99)`,
            transition: "stroke-dasharray 0.7s ease, stroke 0.7s ease",
          }}
        />
      )}

      {/* Tick labels */}
      {[6, 9, 12].map((tick) => {
        const { x, y } = labelPosition(tick, R + 16);
        return (
          <text
            key={tick}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-gray-500 text-[9px]"
          >
            {tick}
          </text>
        );
      })}

      {/* Center value */}
      <text
        x={CX}
        y={CY - 2}
        textAnchor="middle"
        className="fill-black text-5xl"
      >
        {Math.round(clamped)}
      </text>
    </svg>
  );
}

export default function UvIndexCard(): JSX.Element {
  const { data } = useWeatherData();
  const uv = data?.currentConditions?.uvindex;

  return (
    <div className="bg-white p-5 rounded-2xl flex gap-y-5 flex-col">
      <h1 className="text-gray-400">UV Index</h1>
      {uv != null ? (
        <UvGauge value={uv} />
      ) : (
        <p className="text-gray-400">No UV data available</p>
      )}
    </div>
  );
}
