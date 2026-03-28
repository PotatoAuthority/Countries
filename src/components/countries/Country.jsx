import React from 'react';
import '../country.css'

const Country = ({country}) => {
    // const nameObj = country.name;
    console.log(country.name.common);
    const name = country.name.common;
    return (
        <div className='country'>
            <p>Name: {name}</p>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        </div>
    );
};

export default Country;