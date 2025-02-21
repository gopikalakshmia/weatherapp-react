import { useState } from "react";

export default function Search(){
    const [city,setCity]=useState([]);
    const apiKey='a2a3d57d7dc7ae05a6322fc9d51d5619';
    const fetchCity=async(event)=>{
        const response=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${event.target.value}&limit=5&appid=${apiKey}`);
        if(response.ok){
          const data=await response.json();
          console.log(data);
          setCity(data);
        }
        }
        const handleClick=async(event)=>{
            console.log(event.target.value);
            const lat=(city[event.target.value].lat).toFixed(2);
            const lon=(city[event.target.value].lon).toFixed(2);
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c148382af0f128e286f05cf1f6868327`);
            if(response.ok){
                const data=await response.json();
                console.log(data);
              }
        }
    return(
        <>
        <input type="text" placeholder="Enter City" onChange={()=>{fetchCity(event)}}/>
        {city &&<div>{city.map((option,index)=><div key={index}> <button onClick={()=>handleClick(event)} value={index}>{`${option.name} , ${option.state} , ${option.country}`}</button></div>)}</div>}
        </>
    )
}