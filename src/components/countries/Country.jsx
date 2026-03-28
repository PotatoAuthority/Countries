
import { useState } from 'react';
import '../country.css'

const Country = ({country, handleVisitedCountry}) => {

    const [isVisited, setVisited] = useState(false);
    


    



    function handleVisited(){
        console.log('visited:',name);
        //basic
        // if(isVisited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        //second
        // isVisited? setVisited(false) : setVisited(true);

        //third
        setVisited(!isVisited);
        handleVisitedCountry(country);
    }
    // const nameObj = country.name;
    console.log(country.name.common);
    const name = country.name.common;
    return (
        <div className={`country ${isVisited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Name: {name}</p>
            <button onClick={handleVisited}>{isVisited ? 'Visited': 'Not Visited'}</button>
        </div>
    );
};

export default Country;