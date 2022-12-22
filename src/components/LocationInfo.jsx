import React from 'react';

const LocationInfo = ({location}) => {
    console.log(Location)
    return (
       <article className='location-card'>
        <h2>{location?.name}</h2>
        <ul>
            <li className='Type'><span>Type:</span> {location?.type}</li>
            <li className='Dimension'><span>Dimension:</span> {location?.dimension}</li>
            <li className='Population'><span>Population:</span> {location?.residents.length}</li>
        </ul>
       </article>
    );
};

export default LocationInfo;