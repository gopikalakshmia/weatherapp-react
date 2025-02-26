import { createContext, useState } from "react";


export const TempContext=createContext({temp:'C',toggleTemp:()=>{},reset:()=>{}});
export const   TempContextProvider=({children})=>{
const [temp,setTemp]=useState("C");
const handleToggleTemp=()=>{
    console.log(temp);
    setTemp(prevTemp=>prevTemp==='C'?'F':'C');
}
const handleReset=()=>{
    setTemp("C");
}

const initialValue={
    temp:temp,
    toggleTemp:handleToggleTemp,
    reset:handleReset
}
    return(
        <TempContext.Provider value={initialValue}>
            {children}
        </TempContext.Provider>
    )

}