import React, { useState, useEffect } from 'react';

const url = 'https://restcountries.com/v3.1/all';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch(url)
        const countries = response
        console.log(countries.json())
        setCountries(countries.PromiseResult.json())
        console.log(countries.PromiseResult.json())
    }   
    
    useEffect(() => {
        fetchCountries()
       }, []);

    return (
        <div>
            {countries.map((country) => {
                //const { numericCode, name, population, region, capital, flag } = country

                return (
                    <article key={country.numericCode}>
                        <div>
                            <img src={country.flag}></img>
                            <h3>{country.name}</h3>
                            <h4>Population: {country.population}</h4>
                            <h4>Region: {country.region}</h4>
                            <h4>Capital: {country.capital}</h4>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
 
export default Countries;
