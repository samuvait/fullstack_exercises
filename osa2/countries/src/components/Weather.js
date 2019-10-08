import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Weather = ({ name }) => {

  const [weather, setWeather] = useState({})
  const [iconurl, setIconUrl] = useState('')
  const icon = { name: '' }

    useEffect(() => {
      console.log('effect weather')
      let query = 'https://api.openweathermap.org/data/2.5/weather?q=' + name + '&APPID=5fd9e36225b8e0965b1a4df82e867c3a'
      console.log('query', query)
      axios.get(query).then(response => {
        console.log('response got ', response.data)
        setWeather(response.data)
      })
    }, [])

  console.log('weather', weather)

  if (weather.main) {
    let url = ''
    if(weather.weather[0].icon) {
      icon.name = (weather.weather[0].icon)
      url = 'http://openweathermap.org/img/wn/' + icon.name + '@2x.png'
      console.log('name', icon.name)
    }

    let temp = weather.main.temp - 273.15
    return (
      <div>
        <h3>Weather in {name}</h3>
        <p><b>temperature: </b> {temp.toFixed(2)} Celsius</p>
        <img src={url} alt={weather.weather[0].description}></img>
        <p><b>wind: </b> {weather.wind.speed} m/s</p>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Weather in {name}</h3>
        <p>Searching for weather</p>
      </div>
    )
  }
}

export default Weather