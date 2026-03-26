# Wetter-App

Eine React-basierte Wetter-App mit Echtzeit-Wetterdaten fuer jede Stadt der Welt.

**Live Demo:** [https://wetter-app-router.vercel.app](https://wetter-app-router.vercel.app)

## Features

- Echtzeit-Wetterdaten von OpenWeatherMap API
- Stadtsuche mit Fehlerbehandlung
- Favoriten speichern (localStorage)
- Dark Mode / Light Mode Toggle
- Responsive Design
- 404-Seite fuer unbekannte Routen

## Tech Stack

- React 19
- Vite
- React Router 7
- Tailwind CSS
- OpenWeatherMap API

## Lokale Installation

1. Repository klonen:
```bash
git clone https://github.com/eeraj88/wetter-app-router.git
cd wetter-app-router
```

2. Abhaengigkeiten installieren:
```bash
npm install
```

3. `.env` Datei im Root-Verzeichnis erstellen:
```
VITE_WEATHER_API_KEY=dein_openweathermap_api_key
```

4. Entwicklungsserver starten:
```bash
npm run dev
```

## Scripts

| Befehl | Beschreibung |
|--------|--------------|
| `npm run dev` | Startet den Entwicklungsserver |
| `npm run build` | Erstellt die Produktions-Build |
| `npm run preview` | Vorschau des Produktions-Builds |

## Projektstruktur

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   └── LoadingSpinner.jsx
├── pages/
│   ├── Home.jsx
│   ├── Favoriten.jsx
│   ├── Ueber.jsx
│   └── NotFound.jsx
├── context/
│   └── ThemeContext.jsx
├── App.jsx
└── main.jsx
```

## Autor

Eraj - Frontend Development Kurs 2026
