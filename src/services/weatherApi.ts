const API_KEY: string = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL: string = import.meta.env.VITE_WEATHER_BASE_URL;

export async function fetchWeather(
  location: string,
  unit: "metric" | "us" = "metric",
) {
  const response = await fetch(
    `${BASE_URL}/${encodeURIComponent(location)}?unitGroup=${unit}&key=${API_KEY}&contentType=json`,
  );

  if (!response.ok) throw new Error(`Weather Request Failed`);
  return await response.json();
}
