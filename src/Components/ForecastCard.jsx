export default function ForecastCard({date,forecastDay}){
    const day=new Date(date).toLocaleDateString("en-US",{weekday:"long"});
    const today=new Date().toLocaleDateString("en-US",{weekday:"long"});
    
 
    return(
      < > 
      {(day!==today) &&<div className="p-5 -mt-20 justify-self-center shadow-2xl m-6 rounded-lg text-center ">
        <h1 className="font-bold">{day}</h1>
                <img
                  src={`https://openweathermap.org/img/wn/${forecastDay.icon}.png`}
                  alt="weathericonimage"
                  className="size-15 justify-self-center"
                />
                <p className="font-bold text-xs text-bold">{forecastDay.description}</p>
                <p className=""> {Math.round(forecastDay.temp_max)}°C / {Math.round(forecastDay.temp_min)}°C</p>
              </div>}
  </>
    )
}