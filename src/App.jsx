import { useState } from "react";

import "./App.css";
import Search from "./Components/Search";
import DisplayWeather from "./Components/DisplayWeather";

function App() {
  const [weather, setWeather] = useState([]);
  const handleCurrentWeather = (weather) => {
    setWeather(weather);
  };
  return (
    <>
      <div className="bg-[url('../public/Images/sky.jpg')] h-screen">
        <Search handleCurrentWeather={handleCurrentWeather} />
        <DisplayWeather weather={weather} />
      </div>
    </>
  );
}

export default App;
