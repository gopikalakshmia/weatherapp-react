import { useState } from "react";

import "./App.css";
import Search from "./Components/Search";
import DisplayWeather from "./Components/DisplayWeather";
import ForecastWeather from "./Components/ForecastWeather";

function App() {
  const [weather, setWeather] = useState([]);
  const [forecastDays, setforecastDays] = useState([]);
  const handleCurrentWeather = (weather,forecastData) => {
    setWeather(weather);
    setforecastDays(forecastData);
  };
  return (
    <>
      <div className="bg-[url('../Images/sky.jpg')] h-screen">
        <Search handleCurrentWeather={handleCurrentWeather} />
        <DisplayWeather weather={weather} />
        <ForecastWeather forecastDays={forecastDays}/>
      </div>
    </>
  );
}

export default App;
