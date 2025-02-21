import  {React,useEffect,useCallback,useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function SearchBar() {
  const [value, setValue] = useState(null);
const [cities,setCities]=useState([]);




// useEffect(()=>{const fetchCity=async()=>{
//   const response=await fetch("https://countriesnow.space/api/v0.1/countries");



//   if(response.ok){
//       const data=await response.json();
//       const citiyform=data.data.find((item)=>item.country==='Canada');
// //duplicate names in the cities
//       setCities([...new Set(citiyform.cities)])
// }}
// fetchCity();
// },[]);
const fetchCity=async(textInput)=>{
  const response=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${textInput}&limit=5&appid=a2a3d57d7dc7ae05a6322fc9d51d5619`);
  if(response.ok){
    const data=await response.json();
    setCities(data);
    console.log(data);
  }
  }

  return (
    <Autocomplete
      value={value}
      
      onChange={(event, newValue) => {
        console.log(newValue);
        fetchCity(newValue);
        if (typeof newValue === 'string') {
          setValue({
            name: newValue,
          });
        }  else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {

        const filtered = filter(options, params);
        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={cities}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          fetchCity(option);
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          fetchCity(option.inputValue);
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(props, option) => {
        console.log(props);
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
           {`${option.name} , ${option.state} , ${option.country}`}
          </li>
        );
      }}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Please select the city" />
      )}
    />
  );
}

