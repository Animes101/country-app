import React, { useEffect, useState } from 'react'
import './country.css'

import CountryCard from './CountryCard';

function Country() {

  const [countries ,setCountries]=useState([]);
  const [old ,setOld]=useState([]);
  const [count ,setCount]=useState(0);

  useEffect( ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => setCountries(data))
   

  },[])

  const handleCount=(offical)=>{

    const newCountris=[...old,offical]
    setOld(newCountris);
    setCount(prev=>prev +1)


  }


  return (
    <>
    <header id='header'>
        <h1>country app</h1>
    </header>
     <div className='visitedCountry'>
     <h1>{count}</h1>
     <h1>visited country name</h1>
      {old.map((item,index)=><h1 key={index}>{item}</h1>)}
     </div>
  
    <article className='coutry-container'>
      {countries.map((country ,index)=> <CountryCard onCount={handleCount} key={index} country={country}></CountryCard>)}
    </article>
    </>
  );
}

export default Country