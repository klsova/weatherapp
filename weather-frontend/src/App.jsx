import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeather = async () => {
    if (!city.trim()) return
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`http://localhost:8080/api/weather?city=${encodeURIComponent(city)}`)
      if (!response.ok) throw new Error('City not found')
      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') fetchWeather()
  }

  const getWeatherIcon = (code) => {
    if (!code) return '🌡'
    if (code >= 200 && code < 300) return '⛈'
    if (code >= 300 && code < 400) return '🌦'
    if (code >= 500 && code < 600) return '🌧'
    if (code >= 600 && code < 700) return '❄'
    if (code >= 700 && code < 800) return '🌫'
    if (code === 800) return '☀'
    if (code > 800) return '☁'
    return '🌡'
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Weather</h1>
        <p className="subtitle">Check the current weather in any city</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={fetchWeather} disabled={loading || !city.trim()}>
            {loading ? (
              <span className="spinner" />
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            )}
          </button>
        </div>

        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}

        {weather && !error && (
          <div className="weather-result">
            <div className="weather-icon">
              {getWeatherIcon(weather.weather?.[0]?.id)}
            </div>
            <h2 className="city-name">{weather.name}</h2>
            <div className="temperature">
              {Math.round(weather.main.temp)}°C
            </div>
            <p className="description">{weather.weather[0].description}</p>
            <div className="details">
              <div className="detail-item">
                <span className="detail-label">Feels like</span>
                <span className="detail-value">{Math.round(weather.main.feels_like)}°C</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Humidity</span>
                <span className="detail-value">{weather.main.humidity}%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Wind</span>
                <span className="detail-value">{weather.wind.speed} m/s</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
