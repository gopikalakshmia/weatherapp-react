import { useState } from "react";
import ForecastCard from "./ForecastCard";
import { useEffect } from "react";
import useFetch from "./useFetch";

export default function ForecastWeather({ coordinates }) {

  const [forecastData, setForecastData] = useState([]);
  //fetchAPI
  const apiKey = "a2a3d57d7dc7ae05a6322fc9d51d5619";
  const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${apiKey}`;
 //custom hook
 const { data: forecastDays, isLoading, error } = useFetch(api);
 
  useEffect(() => {
    const dailyData = [];
    forecastDays &&
      forecastDays.list &&
      forecastDays.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0]; // Extract date
        const tempMax = item.main.temp_max; // temp_max from API
        const tempMin = item.main.temp_min; // temp_min from API
        if (!dailyData[date]) {
          dailyData[date] = {
            temp_max: tempMax,
            temp_min: tempMin,
            description: item.weather[0].description,
            icon: item.weather[0].icon,
          };
        } else {
          dailyData[date].temp_max = Math.max(
            dailyData[date].temp_max,
            tempMax
          );
          dailyData[date].temp_min = Math.min(
            dailyData[date].temp_min,
            tempMin
          );
        }
      });
    setForecastData(Object.entries(dailyData).slice(0, 5));
  }, [forecastDays]);

 
  if (isLoading) {
    return <p>Weather data is loading.....</p>;
  }
  if (error) {
    return (
      <p className="text-red-800 text-extrabold p-5 m-5 text-center text-xl">
        {error.message}
      </p>
    );
  }

  return (
    <div className="justify-self-center flex flex-row">
      {forecastData &&
        ///forecastData.map((item)=><ForecastCard key={item[0]} forecastDay={item[1]} />)}
        forecastData.map(([date, data]) => (
          <ForecastCard key={date} date={date} forecastDay={data} />
        ))}
    </div>
  );
}
