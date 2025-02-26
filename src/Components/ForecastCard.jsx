import { useContext } from "react";
import { TempContext } from "../Store/TempContext";
export default function ForecastCard({date,forecastDay}){
    const day=new Date(date).toLocaleDateString("en-US",{weekday:"long"});
    const today=new Date().toLocaleDateString("en-US",{weekday:"long"});
      //context
      const {temp:celsiusTemp}=useContext(TempContext);
 
    return(
      < > 
      {(day!==today) &&<div className="p-5  justify-self-center shadow-2xl m-5 w-35 rounded-lg text-center bg-white/50 ">
        <h1 className="font-bold">{day}</h1>
                <img
                  src={`https://openweathermap.org/img/wn/${forecastDay.icon}.png`}
                  alt="weathericonimage"
                  className="size-15 justify-self-center"
                />
                <p className="font-bold text-xs text-bold">{forecastDay.description}</p>
                <p className=""> {(celsiusTemp==='C')?`${Math.round(forecastDay.temp_max)}°C`:`${Math.round(forecastDay.temp_max*1.8+32)}°F`} / {(celsiusTemp==='C')?`${Math.round(forecastDay.temp_min)}°C`:`${Math.round(forecastDay.temp_min*1.8+32)}°F`}</p>
              </div>}
  </>
    )
}