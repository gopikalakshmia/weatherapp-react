import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWind,faWater,faCloud, faTemperatureLow, faTemperatureArrowDown, faTemperatureArrowUp} from '@fortawesome/free-solid-svg-icons';
import IconDisplay from './IconDisplay';
import useFetch from './useFetch';
import TempToggle from './tempToggle';
import { useContext } from 'react';
import { TempContext } from '../Store/TempContext';


export default function DisplayWeather({ coordinates }) {
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
  //context
  const {temp:celsiusTemp}=useContext(TempContext);
  //fetchAPI
  const apiKey = "a2a3d57d7dc7ae05a6322fc9d51d5619";
  const api=`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${apiKey}`;
  const{data:weather,isLoading,error}=useFetch(api);
  if(isLoading){return <p >Weather data is loading.....</p>}
  if(error){return <p className='text-red-800 text-extrabold p-5 m-5 text-center text-xl'>{error.message}</p>}
  return (
    <div>
      <div className=" fixed top-1/5 left-1/4  font-sans p-20 shadow-2xl  w-1/2  rounded-4xl  bg-white/20">
      <div className='justify-self-end'><TempToggle/></div>
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
                  <p className="font-bold text-xs text-center">{weather.weather[0].description}</p>
                </div>
                <div className=" font-light ">
                  <p>
                    <span className="text-9xl text-blue-950 font-light">
                      {celsiusTemp==='C'?Math.round(weather.main.temp):Math.round(weather.main.temp*1.8+32)}
                    </span>
                    <span className="">{celsiusTemp==='C'?"°C":"°F"}</span>
                  </p>
                </div>
              </div>
              </div>
            
              <div className="flex flex-col w-1/2 p-5  text-lg font-medium ">
                <div className="pt-1 p-4 font-semibold text-blue-800">
                  <p>Feels like  {celsiusTemp==='C'?`${Math.round(weather.main.feels_like)}°C`:`${Math.round(weather.main.feels_like*1.8+32)}°F`}</p>
                </div>
                <div className='flex flex-row'>
                <IconDisplay icon={faTemperatureArrowUp} identifier={""} value={celsiusTemp==='C'?`${Math.round(weather.main.temp_min)}°C`:`${Math.round(weather.main.temp_min*1.8+32)}°F`}/>
                <IconDisplay icon={faTemperatureArrowDown} identifier={""} value={celsiusTemp==='C'?`${Math.round(weather.main.temp_max)}°C`:`${Math.round(weather.main.temp_max*1.8+32)}°F`}/>
                </div>
                <IconDisplay icon={faWater} identifier={"Humidity"} value={`${weather.main.humidity} %`}/>
                <IconDisplay icon={faWind} identifier={"Wind"} value={`${Math.round(weather.wind.speed)} m/s`}/>
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
