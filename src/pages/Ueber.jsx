import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Ueber() {
  const { istDunkel } = useContext(ThemeContext)

  return (
    <div className="max-w-2xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Über die <span className="text-blue-500">Wetter-App</span>
      </h1>
      
      <div className={`p-8 rounded-2xl shadow-xl transition-colors duration-300 ${
        istDunkel ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
      }`}>
        <p className="text-lg mb-6 leading-relaxed">
          Diese App wurde im Rahmen des <strong>Morphos Bootcamps 2026</strong> entwickelt. 
          Sie zeigt, wie man mit modernen Web-Technologien eine schnelle und benutzerfreundliche 
          Wetter-Vorhersage baut.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Linke Spalte: Tech Stack */}
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-3 border-b border-blue-200 pb-1">
              Tech Stack
            </h3>
            <ul className="space-y-2 font-medium">
              <li>⚛️ React 18 (Vite)</li>
              <li>🛣️ React Router 6</li>
              <li>🎨 Tailwind CSS</li>
              <li>☁️ OpenWeather API</li>
            </ul>
          </div>

          {/* Rechte Spalte: Gelernte Konzepte */}
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-3 border-b border-blue-200 pb-1">
              Gelernt & Angewendet
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• State Management (useState)</li>
              <li>• API Fetching (useEffect)</li>
              <li>• Globaler Context (useContext)</li>
              <li>• LocalStorage Persistence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ueber