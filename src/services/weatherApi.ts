const API_KEY: string = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL: string = import.meta.env.VITE_WEATHER_BASE_URL;

// Fake Delay for Testing
const delayMs = 0;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchWeather(
  location: string,
  unit: "metric" | "us" = "metric",
) {
  // Fake Delay for Testing
  await sleep(delayMs);
  const params = new URLSearchParams({
    unitGroup: unit,
    key: API_KEY,
    contentType: "json",
    lang: "en",
    include: "current,hours,days",
    elements: [
      "aqius",
      "aqieur",
      "pm1",
      "pm2p5",
      "pm10",
      "o3",
      "no2",
      "so2",
      "co",
    ]
      .map((e) => `+${e}`)
      .join(","),
  });

  const response = await fetch(
    `${BASE_URL}/${encodeURIComponent(location)}?${params.toString()}`,
  );

  if (!response.ok) throw new Error(`Weather Request Failed`);
  return await response.json();
}
