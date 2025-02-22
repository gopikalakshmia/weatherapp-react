export default function DisplayWeather({ weather }) {
  return (
    <div className="p-5 ">
      {weather && weather.main ? (
        <div className="flex flex-row">
             <div className="p-5 m-5">
            <h2>Today</h2>
            <h2>{weather.name}</h2>
          </div>
          <div className="p-5 ">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="weathericonimage"
              className=""
            />
            <p>{weather.weather[0].description}</p>
          </div>
         
          <div className="p-5 m-5">
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Feels like : {weather.main.feels_like}°C</p>
            {/* <p>Humidity : {weather.main.humidity}%</p> */}
            {/* <p>Pressure : {weather.main.pressure}</p>
         <p>Wind Speed : {weather.wind.speed}m/s</p> */}
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
