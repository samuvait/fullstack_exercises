import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Weather from './Weather'

const Countries = ({ findTerm, setFindTerm }) => {

  let [countries, setCountries] = useState([])

  console.log(findTerm)

  useEffect(() => {
    console.log('effect')
    let query = 'https://restcountries.eu/rest/v2/all'
    axios.get(query).then(response => {
      console.log('response got')
      setCountries(response.data)
    })
  }, [])

  const list = countries.filter(country => country.name.toLowerCase().includes(findTerm.toLowerCase()))

  const showCountry = (name) => {
    console.log('country', name)
    setFindTerm(name)
  }

  console.log('countries', countries)
  console.log('list', list)
  if (list.length < 10 && list.length > 1) {
    console.log('over 1')
    return (
      <div>
        <ul>
          {list.map(country => <li>{country.name} <button onClick={() => showCountry(country.name)}>show</button></li>)}
        </ul>      
      </div>
    )
  } else if (list.length === 1) {
    console.log('exact 1')
    let country = list[0]
    return (
      <div>
        <h2>{country.name}</h2>
        <p>capital {country.capital} <br></br> population {country.population}</p>
        <h3>languages</h3>
        <ul>
          {country.languages.map(lang => <li>{lang.name}</li>)}
        </ul>
        <img src={country.flag} alt={country.name} width='450' length ='275' />

        <Weather name={country.capital}/>
      </div>
    )
  } else {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }
}

export default Countries