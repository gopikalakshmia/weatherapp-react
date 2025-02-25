import { useState } from "react";

import "./App.css";
import Search from "./Components/Search";
import DisplayWeather from "./Components/DisplayWeather";
import ForecastWeather from "./Components/ForecastWeather";

function App() {
  const [coordinates,setCoordinates]=useState(null);
  const handleCurrentWeather = (value) => {
    setCoordinates(value);
  };
  return (
    <>
      <div className="bg-[url('../Images/sky.jpg')] h-screen">
        <Search handleCurrentWeather={handleCurrentWeather} />
        {coordinates && <DisplayWeather coordinates={coordinates} />}
        {coordinates &&<ForecastWeather coordinates={coordinates}/>}
      </div>
    </>
  );
}

export default App;
