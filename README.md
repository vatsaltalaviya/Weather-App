# Weather App

This is a simple weather application built using React and Vite. The app fetches real-time weather data from the OpenWeatherMap API and displays it in a user-friendly interface.

## Features

- Search for weather information by city name.
- Displays temperature, humidity, wind speed, and weather conditions.
- Dynamic weather icons based on the current weather.
- Responsive and visually appealing design.

## Project Structure

Workspace
(rerun without)
Collecting workspace information

Weather-App/
├── public/ 
│ └── vite.svg 
├── src/ 
│ ├── App.jsx 
│ ├── index.css 
│ ├── main.jsx 
│ ├── assets/ 
│ │ ├── clear.png
│ │ ├── cloud.png 
│ │ ├── drizzle.png 
│ │ ├── humidity.png 
│ │ ├── rain.png 
│ │ ├── search.png 
│ │ ├── snow.png 
│ │ ├── wind.png 
│ └── Components/ 
│ ├── Weather.css 
│ └── Weather.jsx 
├── .env 
├── .gitignore 
├── eslint.config.js 
├── index.html 
├── package.json 
├── README.md 
└── vite.config.js

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   npm install


   VITE_APP_KEY=your_api_key_here

   Usage
    Start the development server:
      npm run dev 

Components
Weather.jsx
Handles fetching weather data from the OpenWeatherMap API.
Displays weather information such as temperature, city name, humidity, and wind speed.
Uses dynamic icons based on weather conditions.
Weather.css
Contains styles for the weather component, including layout, colors, and responsiveness.
API Integration
The app uses the OpenWeatherMap API to fetch weather data. The API key is stored in the .env file and accessed using import.meta.env.VITE_APP_KEY.

Scripts
npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run preview: Previews the production build.
npm run lint: Runs ESLint to check for code quality issues.
Dependencies
React
React DOM
Vite
