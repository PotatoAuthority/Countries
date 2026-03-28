import React, { use, useState } from 'react';
import Country from './components/countries/Country';
import './components/countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    function handleVisitedCountry(country){
        console.log('Country Visted:', country);
        // visitedCountries.push(country);           doesnt work cz react dont detect any changes cz location is same
        const newCountryArr = [...visitedCountries, country];
        setVisitedCountries(newCountryArr);
        console.log(visitedCountries);
    }

    const countryData = use(countriesPromise);
    const country = countryData.countries;
    console.log(country);
    return (
        <div>
            <h1>This is Country: {country.length}</h1>
            <p>Country Visited: {visitedCountries.length}</p>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'> 
                {
                    country.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;