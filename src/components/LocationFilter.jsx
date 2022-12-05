import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LocationFilter = ({locationName, getNewLocation}) => {

    const[locationsOptions, setLocationsOptions]=useState()
    

    useEffect(() => {
        if(!locationName) return setLocationsOptions()
        const URL= `https://rickandmortyapi.com/api/location?name=${locationName}`
        axios.get(URL)
        .then(res=>setLocationsOptions(res.data.results))
        .catch(err=>console.log(err))
    }, [locationName])
    
    
  return (
    <div className='des'>
      <a href="">__________________________________________</a>
      <div className='desplegable'>
        {
            locationsOptions?.map(locationOption=> <li onClick={()=> getNewLocation(locationOption.url, locationOption.name)} key={locationOption.url}>{locationOption.name}</li> )
                
        }
    </div>
    </div>
      
    
    
  )
}

export default LocationFilter
