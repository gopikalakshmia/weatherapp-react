import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWind,faWater,faCloud, faTemperatureLow, faTemperatureArrowDown, faTemperatureArrowUp} from '@fortawesome/free-solid-svg-icons';


export default function IconDisplay({ icon,identifier,value }) {
    return(
        <div className=" flex flex-row p-3 text-sm text-blue-800">
        <FontAwesomeIcon icon={icon} size="2x" className='pr-5'/>
          {identifier &&<p className='align-middle text-xl font-light pr-5'>{identifier}</p>}
          <p className='align-middle text-xl font-light'>{value}%</p>
        </div>
    )
}