import React, { useEffect, useState } from 'react'
import './country.css'

import CountryCard from './CountryCard';

function Country() {

  const [countries ,setCountries]=useState([]);

  useEffect( ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => setCountries(data))
   

  },[])
  return (
    <>
    <header id='header'>
        <h1>country app</h1>
    </header>

    {/* country app show */}
    <article className='coutry-container'>
      {countries.map((country ,index)=> <CountryCard key={index} country={country}></CountryCard>)}
    </article>
    </>
  );
}

export default Country