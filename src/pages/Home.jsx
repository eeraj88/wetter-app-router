import { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom' // Wichtig für den State-Empfang
import ThemeContext from '../context/ThemeContext'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import LoadingSpinner from '../components/LoadingSpinner'

function Home() {
  const { istDunkel } = useContext(ThemeContext)
  const location = useLocation()
  
  const [city, setCity] = useState(() => {
    return localStorage.getItem('lastCity') || ''
  })
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // 1. Effekt: Prüfen, ob wir von der Favoriten-Seite kommen
  useEffect(() => {
    if (location.state && location.state.gewaehlteStadt) {
      setCity(location.state.gewaehlteStadt)
    }
  }, [location.state])

  // 2. Effekt: Stadt im localStorage speichern
  useEffect(() => {
    if (city) localStorage.setItem('lastCity', city)
  }, [city])

  // 3. Effekt: Wetter-Daten fetchen
  useEffect(() => {
    async function fetchWeather() {
      if (!city) return
      setLoading(true)
      setError(null)

      try {
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=de`
        )
        if (!res.ok) {
          if (res.status === 404) throw new Error('Stadt nicht gefunden')
          if (res.status === 401) throw new Error('API-Key ungueltig')
          throw new Error(`Serverfehler: ${res.status}`)
        }
        const json = await res.json()
        setWeatherData(json)
      } catch (err) {
        setError(err.message)
        setWeatherData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [city])

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        <span className="text-blue-500">Wetter</span> suchen
      </h1>
      <SearchBar onSearch={setCity} />
      
      {loading && <LoadingSpinner />}
      
      {error && (
        <p className="text-center mt-4 text-red-500 bg-red-100 p-2 rounded">
          {error}
        </p>
      )}
      
      {weatherData && !loading && <WeatherCard data={weatherData} />}
    </div>
  )
}

export default Home