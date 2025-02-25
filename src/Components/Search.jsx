import { useState } from "react";

export default function Search({ handleCurrentWeather }) {
  const [city, setCity] = useState([]);


  const apiKey = "a2a3d57d7dc7ae05a6322fc9d51d5619";
  const fetchCity = async (event) => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${event.target.value}&&exclude={minutely,hourly}&limit=5&appid=${apiKey}`
    );
    if (response.ok) {
      const data = await response.json();
      //console.log(data);
      setCity(data);
    }
    else{
      throw new Error("Failed to fetch data..")
    }
  };
  const handleClick = async (event) => {
    //console.log(event.target.value);
    //try {
      const lat = city[event.target.value].lat.toFixed(2);
      const lon = city[event.target.value].lon.toFixed(2);
      handleCurrentWeather({lat:lat,lon:lon});
      // const weatherResponse = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      // );
      // const forecastResponse = await fetch(
      //   `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      // );

      // if (weatherResponse.ok && forecastResponse.ok) {
      //   const weatherData = await weatherResponse.json();
      //   const forecastData=await forecastResponse.json();
      //   console.log(forecastData);
      //   handleCurrentWeather(weatherData,forecastData);
      //   console.log
      //   setCity([]);
      // }
    //}
    // } catch (err) {
    //   console.log(
    //     "Error occured during fetching the data from Api",
       
    //   );
    // }
  };
  return (
    <div className="text-center p-5">
      <input
        type="text"
        placeholder="Enter City"
        className="border-2 border-blue-400 rounded-md p-1 w-sm"
        onChange={() => {
          fetchCity(event);
        }}
      />
      {city && (
        <div className="bg-sky-200  w-sm text-center justify-self-center">
          {city.map((option, index) => (
            <div key={index} className=" font-semibold p-1 text-left">
              {" "}
              <button
                onClick={() => handleClick(event)}
                value={index}
              >{`${option.name} , ${option.state} , ${option.country}`}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
