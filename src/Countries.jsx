import React, { use } from 'react';
import Country from './components/countries/Country';
import './components/countries.css'

const Countries = ({countriesPromise}) => {
    const countryData = use(countriesPromise);
    const country = countryData.countries;
    console.log(country);
    return (
        <div>
            <h1>This is Country: {country.length}</h1>
            <div className='countries'> 
                {
                    country.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;