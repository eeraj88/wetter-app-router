import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ThemeContext from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Favoriten from './pages/Favoriten'
import Ueber from './pages/Ueber'
import NotFound from './pages/NotFound' // Wichtig: Import hinzufügen!

function App() {
  // Diese States müssen hier existieren, damit der ThemeContext sie verteilen kann
  const [istDunkel, setIstDunkel] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  const toggleDarkMode = () => {
    setIstDunkel(!istDunkel)
  }

  useEffect(() => {
    localStorage.setItem('darkMode', istDunkel)
  }, [istDunkel])

  return (
    <ThemeContext.Provider value={{ istDunkel, toggleDarkMode }}>
      <BrowserRouter>
        <div
          className={`min-h-screen flex flex-col transition-colors duration-300 ${
            istDunkel
              ? "bg-gray-900 text-gray-100"
              : "bg-blue-50 text-gray-900"
          }`}
        >
          <Navbar />

          <main className="flex-1 px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoriten" element={<Favoriten />} />
              <Route path="/ueber" element={<Ueber />} />
              {/* Die Catch-All Route muss immer ganz unten stehen */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App