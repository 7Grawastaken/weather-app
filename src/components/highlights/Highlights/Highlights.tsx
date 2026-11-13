import type { JSX } from "react/jsx-runtime";
import AirQualityCard from "../AirQualityCard/AirQualityCard";
import HumidityCard from "../HumidityCard/HumidityCard";
import SunriseSunsetCard from "../SunriseSunsetCard/SunriseSunsetCard";
import UvIndexCard from "../UvIndexCard/UvIndexCard";
import VisibilityCard from "../VisibilityCard/VisibilityCard";
import WindCard from "../WindCard/WindCard";

export default function Highlights(): JSX.Element {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 [&>div]:hover:scale-103 [&>div]:duration-300 [&>div]:min-h-45">
      <AirQualityCard />
      <HumidityCard />
      <SunriseSunsetCard />
      <UvIndexCard />
      <VisibilityCard />
      <WindCard />
    </div>
  );
}
