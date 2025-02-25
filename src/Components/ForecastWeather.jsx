import { useState } from "react";
import ForecastCard from "./ForecastCard";
import { useEffect } from "react";

export default function ForecastWeather({forecastDays}){
       // Extract daily max and min temperatures
       const [forecastData,setForecastData]= useState([]);

       useEffect(()=>{
        const dailyData=[];
        forecastDays && forecastDays.list && 
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
                dailyData[date].temp_max = Math.max(dailyData[date].temp_max, tempMax);
                dailyData[date].temp_min = Math.min(dailyData[date].temp_min, tempMin);
              }
            });
            console.log(Object.entries(dailyData).slice(0, 5));
            setForecastData(Object.entries(dailyData).slice(0, 5));

        }

       ,[forecastDays])
    
 
    return(
    <div className="justify-self-center flex flex-row">
        {forecastData && 
                    ///forecastData.map((item)=><ForecastCard key={item[0]} forecastDay={item[1]} />)}
                    forecastData.map(([date,data])=><ForecastCard key={date} date={date} forecastDay={data} />)}
    </div>
    )
}