import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWind,faWater,faCloud, faTemperatureLow, faTemperatureArrowDown, faTemperatureArrowUp} from '@fortawesome/free-solid-svg-icons';
import IconDisplay from './IconDisplay';

export default function DisplayWeather({ weather }) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const day = now.getDate();
  const monthDay = month[now.getMonth()];
  const year = now.getFullYear();
  console.log(weather);
  return (
    <div>
      <div className="font-sans p-20 shadow-2xl  w-1/2  rounded-4xl  justify-self-center">
        {weather && weather.main ? (
          <div className="flex flex-row">
            <div className="w-1/2">
            <div className="p-2.5">
              <h2 className="text-blue-900 font-bold">CURRENT WEATHER</h2>
              <h2 className="text-sm text-blue-900">
                {" "}
                {`${day} ${monthDay} ${year}`}
              </h2>
              <h2 className="font-extrabold">{weather.name}</h2>
              </div>
              
              <div className="flex flex-row p-2.5">
                <div className="">
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt="weathericonimage"
                    className="size-25"
                  />
                  <p className="font-bold text-xs ">{weather.weather[0].description}</p>
                </div>
                <div className=" font-light ">
                  <p>
                    <span className="text-9xl text-blue-950 font-light">
                      {Math.round(weather.main.temp)}
                    </span>
                    <span className="">°C</span>
                  </p>
                </div>
              </div>
              </div>
            
              <div className="flex flex-col w-1/2 p-5  text-lg font-medium ">
                <div className="pt-1 p-4 font-semibold text-blue-800">
                  <p>Feels like {Math.round(weather.main.feels_like)}°C</p>
                </div>
                <div className='flex flex-row'>
                <IconDisplay icon={faTemperatureArrowUp} identifier={""} value={weather.main.temp_min}/>
                <IconDisplay icon={faTemperatureArrowDown} identifier={""} value={weather.main.temp_max}/>
                </div>
                <IconDisplay icon={faWater} identifier={"Humidity"} value={weather.main.humidity}/>
                <IconDisplay icon={faWind} identifier={"Wind"} value={weather.wind.speed}/>
                <IconDisplay icon={faCloud} identifier={"Cloud"} value={weather.clouds.all+" %"}/>
              </div>
              
            
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
}
