import React from 'react'

const LocationInfo = ({location}) => {
    
  return (
    <article className='locationInfo'>
      <h1>{location?.name}</h1>
        <ul>
            <li><span>Type:</span>  {location?.type}</li>
            <li><span>Dimension:</span> {location?.dimension}</li>
            <li><span>Population:</span> {location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo
