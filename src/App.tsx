import { type JSX } from "react";
import { fetchWeather } from "./services/weatherApi";
import { useQuery } from "@tanstack/react-query";

function App(): JSX.Element {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => fetchWeather("New York", "metric"),
  });
  if (data) console.log(data);

  return <></>;
}

export default App;
