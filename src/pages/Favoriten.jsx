import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'

function Favoriten() {
  const { istDunkel } = useContext(ThemeContext)
  const navigate = useNavigate()
  const [favs, setFavs] = useState([])

  useEffect(() => {
    const gespeicherteFavs = JSON.parse(localStorage.getItem('wetter-favoriten') || '[]')
    setFavs(gespeicherteFavs)
  }, [])

  const handleCityClick = (stadt) => {
    navigate('/', { state: { gewaehlteStadt: stadt } })
  }

  const entferneFavorit = (e, stadt) => {
    e.stopPropagation() // Verhindert, dass handleCityClick ausgelöst wird
    const neueListe = favs.filter(f => f !== stadt)
    setFavs(neueListe)
    localStorage.setItem('wetter-favoriten', JSON.stringify(neueListe))
  }

  return (
    <div className="max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Meine <span className="text-blue-500">Favoriten</span></h1>
      
      {favs.length === 0 ? (
        <p className={istDunkel ? 'text-gray-400' : 'text-gray-500'}>Noch keine Favoriten gespeichert.</p>
      ) : (
        <div className="grid gap-4">
          {favs.map((stadt) => (
            <div 
              key={stadt}
              onClick={() => handleCityClick(stadt)}
              className={`p-4 rounded-xl cursor-pointer flex justify-between items-center transition-all hover:shadow-lg ${
                istDunkel ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white shadow-md hover:bg-blue-50'
              }`}
            >
              <span className="text-xl font-semibold">{stadt}</span>
              <button 
                onClick={(e) => entferneFavorit(e, stadt)}
                className="text-red-500 hover:scale-110 p-2"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favoriten