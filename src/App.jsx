import { useState } from "react";

import "./App.css";
import Search from "./Components/Search";
import DisplayWeather from "./Components/DisplayWeather";
import ForecastWeather from "./Components/ForecastWeather";
import CityDropdown from "./Components/CityDropdown";

function App() {
  const [coordinates,setCoordinates]=useState(null);
  const[cityChange,setCityChange]=useState(null);
  const handleCurrentWeather = (value) => {
    setCoordinates(value);
  };
  const assignCity=(value)=>{
    setCityChange(value);
  }
  return (
    <>
      <div className="bg-[url('../Images/sky.jpg')] h-screen">
        <Search  assignCity={assignCity}/>
     {  cityChange&& <CityDropdown cityChange={cityChange} handleCurrentWeather={handleCurrentWeather}/>}
        {coordinates && <DisplayWeather coordinates={coordinates} />}
        {coordinates &&<ForecastWeather coordinates={coordinates}/>}
      </div>
    </>
  );
}

export default App;
