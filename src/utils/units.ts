export const UNITS = {
  metric: {
    temp: "C",
    speed: "km/h",
    distance: "km",
  },
  us: {
    temp: "F",
    speed: "mph",
    distance: "mi",
  },
} as const;

export type UnitSystem = keyof typeof UNITS;
