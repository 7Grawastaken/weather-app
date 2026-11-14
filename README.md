# Weather App

A responsive weather dashboard built with React and TypeScript. Search for any location and see current conditions, an hourly forecast, a weekly forecast and daily highlights, with a one-click switch between metric and US units.

Weather App screenshot src/assets/Screenshot 2026-11-14 153715.png

**Live demo:** https://weather-app-tau-amber-16.vercel.app

## Features

- Search weather by location (defaults to the United Arab Emirates)
- Switch between metric (°C, km/h, km) and US (°F, mph, mi) units; values and labels update together
- **Today** tab with an hourly forecast and **Week** tab with a multi-day forecast
- Today's highlights such as visibility, wind and more
- Loading overlay while data is fetching and an error message if a request fails
- Responsive layout for mobile, tablet and desktop

## Tech Stack

- [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query) for data fetching, caching and loading states
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api) for weather data

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- A free API key from [Visual Crossing](https://www.visualcrossing.com/weather-api)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2. Install dependencies
npm install

# 3. Add your API key (see below)

# 4. Start the dev server
npm run dev
```

### Environment variables

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_visual_crossing_api_key
```

Never commit your `.env` file. Make sure it is listed in `.gitignore`.

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project Structure

```
src/
├── components/
│   ├── layout/        # Sidebar, MainPanel and header
│   ├── forecast/      # Hourly and weekly forecast
│   ├── highlights/    # Highlight cards (visibility, wind, ...)
│   └── Loaders/       # Loading spinner
├── services/          # API calls and weather/unit context
├── types/             # TypeScript types for the API response
└── utils/             # Unit definitions and helpers
```

## How Units Work

The selected unit system (`metric` or `us`) is sent to the API as the `unitGroup`, so the API returns already-converted values. A central `UNITS` table supplies the matching labels, and the `useUnits()` hook gives any component the right symbols (`°C`/`°F`, `km/h`/`mph`, `km`/`mi`).

## Acknowledgements

- Weather data provided by [Visual Crossing](https://www.visualcrossing.com/)

## License

This project is licensed under the [MIT License](LICENSE).
