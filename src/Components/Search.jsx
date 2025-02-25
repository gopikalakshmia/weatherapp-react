import { useState } from "react";

export default function Search({ assignCity }) {
  // 

  // const apiKey = "a2a3d57d7dc7ae05a6322fc9d51d5619";
  const fetchCity = async (event) => {
assignCity(event.target.value);
    // const response = await fetch(
    //   `http://api.openweathermap.org/geo/1.0/direct?q=${event.target.value}&&exclude={minutely,hourly}&limit=5&appid=${apiKey}`
    // );
    // if (response.ok) {
    //   const data = await response.json();
    //   //console.log(data);
    //   setCity(data);
    // } else {
    //   throw new Error("Failed to fetch data..");
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
     
    </div>
  );
}
