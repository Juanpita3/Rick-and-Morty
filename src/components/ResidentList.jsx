import React from 'react';
import ResidentCard from './ResidentCard';

const ResidentList = ({location}) => {
  return (
      <section>
        {
          location?.residents.map(urlResident => (
            <ResidentCard key={urlResident} urlResident={urlResident} />
          ))
        }
      </section>
  );
};

export default ResidentList;