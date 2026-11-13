export interface WeatherData {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  description: string;
  days: CurrentConditions[];
  alerts: [];
  stations: { [key: string]: Station };
  currentConditions: CurrentConditions;
}

export interface CurrentConditions {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number | null;
  dew: number | null;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype: Preciptype[] | null;
  windgust: number | null;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number | null;
  cloudcover: number | null;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  conditions: Conditions;
  icon: Icon;
  stations: ID[] | null;
  source: Source;
  sunrise?: string;
  sunriseEpoch?: number;
  sunset?: string;
  sunsetEpoch?: number;
  moonphase?: number;
  tempmax?: number;
  tempmin?: number;
  feelslikemax?: number;
  feelslikemin?: number;
  precipcover?: number;
  severerisk?: number;
  description?: string;
  hours?: CurrentConditions[];

  // Air quality (only present when requested via `elements=+aqius,+aqieur,...`)
  aqius?: number | null; // US AQI
  aqieur?: number | null; // European AQI
  pm1?: number | null; // µg/m³
  pm2p5?: number | null; // µg/m³
  pm10?: number | null; // µg/m³
  o3?: number | null; // ozone, µg/m³
  no2?: number | null; // nitrogen dioxide, µg/m³
  so2?: number | null; // sulphur dioxide, µg/m³
  co?: number | null; // carbon monoxide, µg/m³
}

export const Conditions = {
  Clear: "Clear",
  Overcast: "Overcast",
  PartiallyCloudy: "Partially cloudy",
  RainOvercast: "Rain, Overcast",
  RainPartiallyCloudy: "Rain, Partially cloudy",
} as const;
export type Conditions = (typeof Conditions)[keyof typeof Conditions];

export const Icon = {
  ClearDay: "clear-day",
  ClearNight: "clear-night",
  Cloudy: "cloudy",
  PartlyCloudyDay: "partly-cloudy-day",
  PartlyCloudyNight: "partly-cloudy-night",
  Rain: "rain",
} as const;
export type Icon = (typeof Icon)[keyof typeof Icon];

export const Preciptype = {
  Rain: "rain",
  Snow: "snow",
} as const;
export type Preciptype = (typeof Preciptype)[keyof typeof Preciptype];

export const Source = {
  Comb: "comb",
  Fcst: "fcst",
  Obs: "obs",
} as const;
export type Source = (typeof Source)[keyof typeof Source];

export const ID = {
  Batn6: "BATN6",
  F8726: "F8726",
  Kjfk: "KJFK",
  Klga: "KLGA",
  Knyc: "KNYC",
} as const;
export type ID = (typeof ID)[keyof typeof ID];

export interface Station {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: ID;
  name: string;
  quality: number;
  contribution: number;
}
