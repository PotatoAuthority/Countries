import React, { use } from 'react';
import Country from './components/countries/Country';

const Countries = ({countriesPromise}) => {
    const countryData = use(countriesPromise);
    const country = countryData.countries;
    console.log(country);
    return (
        <div>
            <h1>This is Country: {country.length}</h1>
            {
                country.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;