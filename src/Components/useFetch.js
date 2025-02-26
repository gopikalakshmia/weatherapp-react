import { useEffect, useState } from "react"

export default  function useFetch(fetchApi){
    const[data,setData]=useState(null);
    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState(null);

useEffect(()=>{
      const fetchData=async()=>{ 
        try{
            setIsLoading(true);
        const response = await fetch(fetchApi);
          if (response.ok) {
            const data = await response.json();
            setData(data);
            setIsLoading(false);
          }
          else{
            throw new Error("Failed to fetch data..")
          }
        }
        catch(err){
            setError({message:err.message});
            setIsLoading(false);
        }
    }
    fetchData();
},[fetchApi]);


    return({data,isLoading,error})
}