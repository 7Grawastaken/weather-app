import type { JSX } from "@emotion/react/jsx-runtime";
import { useRef, useState } from "react";
import HourlyCard from "../HourlyCard/HourlyCard";
import { useWeatherData } from "../../../services/WeatherDataContext";
import { Fragment } from "react/jsx-runtime";

const RESISTANCE = 0.3;

export default function HourlyForecast(): JSX.Element {
  const data = useWeatherData();
  const hours = data?.days[0].hours;

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    setIsDragging(true);
    startX.current = e.pageX;
    startScroll.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const el = containerRef.current;
    if (!el) return;
    e.preventDefault();

    const maxScroll = el.scrollWidth - el.clientWidth;
    const desired = startScroll.current - (e.pageX - startX.current);
    const clamped = Math.max(0, Math.min(desired, maxScroll));

    el.scrollLeft = clamped;
    setOffset(-(desired - clamped) * RESISTANCE);
  };

  const stopDragging = () => {
    setIsDragging(false);
    setOffset(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      className={`overflow-x-auto scrollbar-gutter-stable no-scrollbar w-full mb-15 select-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <div
        className="flex gap-5 py-1 w-max"
        style={{
          transform: `translateX(${offset}px)`,
          transition: isDragging
            ? "none"
            : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {hours?.map((hour, i) => (
          <Fragment key={i}>
            <HourlyCard hour={hour} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
