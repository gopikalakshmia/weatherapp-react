import { useEffect, useState } from "react";

import "./App.css";
import Search from "./Components/Search";
import DisplayWeather from "./Components/DisplayWeather";
import ForecastWeather from "./Components/ForecastWeather";
import CityDropdown from "./Components/CityDropdown";
import TempToggle from "./Components/tempToggle";
import { TempContextProvider } from "./Store/TempContext";

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [cityChange, setCityChange] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const handleCurrentWeather = (value) => {
    setCoordinates(value);
  };
  const assignCity = (value) => {
    setCityChange(value);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setCoordinates({ lat: lat, lon: lon });
          setIsLoading(false);
        },
        (error) => {
          console.log("Error,getting position", error);
          setIsLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
      setIsLoading(false);
    }
  }, []);
  if (isLoading) {
    return <p>Weather data is loading.....</p>;
  }
  return (
    <>
      <div className="bg-[url('../Images/sky.jpg')] h-screen">
        <Search assignCity={assignCity} />
        <TempContextProvider>
          {cityChange && (
            <CityDropdown
              cityChange={cityChange}
              handleCurrentWeather={handleCurrentWeather}
            />
          )}

          {coordinates && <DisplayWeather coordinates={coordinates} />}
          {coordinates && <ForecastWeather coordinates={coordinates} />}
        </TempContextProvider>
      </div>
    </>
  );
}

export default App;
