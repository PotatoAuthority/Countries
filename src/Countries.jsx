import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countryData = use(countriesPromise);
    const country = countryData.countries;
    console.log(country);
    return (
        <div>
            <h1>This is Country: {country.length}</h1>
        </div>
    );
};

export default Countries;