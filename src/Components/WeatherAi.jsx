import { useEffect, useState, useContext } from "react";
import { WeatherPrompt } from "../Utils/WeatherPrompt";
import { TempContext } from "../Store/TempContext";
export default function WeatherAi({ weather }) {
  const [prompt, setPrompt] = useState("");
  //context
  const { temp: celsiusTemp } = useContext(TempContext);
 

  useEffect(() => {
    const weatherData = {
        Temperature:
          celsiusTemp === "C"
            ? Math.round(weather.main.temp)
            : Math.round(weather.main.temp * 1.8 + 32),
        Condition: weather.weather[0].description,
        Humidity: weather.main.humidity,
        WindSpeed: weather.wind.speed,
      };
    setPrompt(WeatherPrompt(weatherData));
  }, [weather,celsiusTemp]);

  return <div>{prompt}</div>;
}
