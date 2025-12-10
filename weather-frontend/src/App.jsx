import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const fetcherWeather = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/weather?city=${city}`)
      const data = await response.json()
      setWeather(data)
    }
    catch (error) {
      console.error("Error while fetching the weather", error)
    }
  }

  return (
  <div className='container'>
    <h1>Weather</h1>
    <div className='search-box'>
      <input
        type="text"
        placeholder="Insert city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetcherWeather}>Fetch weather</button>
    </div>

    {weather && (
      <div className='weather-info'>
        <h2>{weather.name}</h2>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Description: {weather.weather[0].description}</p>
      </div>
    )}
  </div>
  )
}

export default App 