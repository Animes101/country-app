import React, { useState } from 'react'

import './country_card.css'

function CountryCard({country,onCount}) {

  const [visited ,setVisited]=useState(false);

  const handleVisited=()=>{
    setVisited(!visited);
  }
  return (
    <div className={`card ${visited ? 'true-background': 'false-background'}`}>
        <h1>{country.name.common}</h1>
        <h2>{country.name.official}</h2>
        <img src={country.flags.png} alt={country.name.common} />
        <p>{country.flags?.alt || 'not found alt'}</p>
        <button onClick={handleVisited}>visited country</button>
        <button onClick={()=>onCount(country.name.common)}>couunt country</button>
    </div>
  )
}

export default CountryCard