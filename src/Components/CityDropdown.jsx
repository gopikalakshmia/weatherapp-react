import { useContext, useState } from "react";
import useFetch from "./useFetch";
import { TempContext } from "../Store/TempContext";

export default function CityDropdown({ cityChange,handleCurrentWeather }) {
const[visible,setVisible]=useState(true);
const{reset}=useContext(TempContext)
  const apiKey = "a2a3d57d7dc7ae05a6322fc9d51d5619";
  const api= `http://api.openweathermap.org/geo/1.0/direct?q=${cityChange}&&exclude={minutely,hourly}&limit=5&appid=${apiKey}`;
  const{data:cityData,isLoading,error}=useFetch(api);

  const handleClick = async (event) => {
    reset();
    setVisible(false);
    const lat = cityData[event.target.value].lat.toFixed(2);
    const lon = cityData[event.target.value].lon.toFixed(2);
    handleCurrentWeather({ lat: lat, lon: lon });


  };

  if(isLoading){return <p >Weather data is loading.....</p>}
  if(error){return <p className='text-red-800 text-extrabold p-5 m-5 text-center text-xl'>{error.message}</p>}
    return(
         <>
            {cityData&&visible &&<div className="bg-sky-200  w-sm text-center justify-self-center -mt-4">
              {cityData.map((option, index) => (
                <div key={index} className=" font-semibold p-1 text-left">
                  {" "}
                  <button
                    onClick={() => handleClick(event)}
                    value={index}
                  >{`${option.name} , ${option.state} , ${option.country}`}</button>
                </div>
              ))}
            </div>}
            </>
          
    )
}