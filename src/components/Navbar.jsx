import { Link, useLocation } from 'react-router-dom' // Neu: useLocation importiert
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Navbar() {
  const { istDunkel, toggleDarkMode } = useContext(ThemeContext)
  const location = useLocation() // Hier holen wir uns die aktuelle URL

  // Diese Funktion prüft, ob der Pfad aktiv ist
  const isActive = (path) => location.pathname === path

  // Hilfsfunktion für die CSS-Klassen der Links
  const linkClass = (path) => `text-sm font-medium transition-colors ${
    isActive(path)
      ? 'text-blue-500 border-b-2 border-blue-500 pb-1' // Style für die aktive Seite
      : istDunkel
        ? 'text-gray-300 hover:text-blue-400'
        : 'text-gray-600 hover:text-blue-600'
  }`

  return (
    <header className={`w-full z-50 transition-colors duration-300 ${
      istDunkel
        ? 'bg-gray-900 border-b border-gray-700'
        : 'bg-white border-b border-gray-200 shadow-sm'
    }`}>
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className={`text-xl font-bold ${istDunkel ? 'text-white' : 'text-gray-900'}`}>
          Wetter<span className="text-blue-500">App</span>
        </Link>

        <nav className="flex items-center gap-6">
          {/* Wir nutzen jetzt die linkClass Funktion für jeden Link */}
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/favoriten" className={linkClass('/favoriten')}>Favoriten</Link>
          <Link to="/ueber" className={linkClass('/ueber')}>Über uns</Link>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors ${
              istDunkel ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {istDunkel ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar