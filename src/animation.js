import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [showMainInfo, setShowMainInfo] = useState(false);
  const [showWeatherStats, setShowWeatherStats] = useState(false);
  const [showWeeklyForecast, setShowWeeklyForecast] = useState(false);
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const mainInfoTimer = setTimeout(() => setShowMainInfo(true), 500);

    const weatherStatsTimer = setTimeout(() => setShowWeatherStats(true), 1500);

    const weeklyForecastTimer = setTimeout(() => setShowWeeklyForecast(true), 2500);

    const cardsInterval = setInterval(() => {
      setVisibleCards((prevVisible) => {
        if (prevVisible < 4) {
          return prevVisible + 1;
        }
        clearInterval(cardsInterval);
        return prevVisible;
      });
    }, 500);

    return () => {
      clearTimeout(mainInfoTimer);
      clearTimeout(weatherStatsTimer);
      clearTimeout(weeklyForecastTimer);
      clearInterval(cardsInterval);
    };
  }, []);

  return (
    <div className="app">
      {showMainInfo && (
        <div className="main-info">
          <div className="weather-header">
            <h1>Paris</h1>
            <p className="weather-date">14 September 2024</p>
            <p className="weather-summary">Sunny</p>
          </div>
          <div className="temperature-display">
            <h1>28°C</h1>
          </div>
          <div className="daily-summary">
            <h3>Summary</h3>
            <p>A nice sunny day with light winds and temperatures around 28°C.</p>
          </div>
        </div>
      )}

      {showWeatherStats && (
        <div className="weather-stats">
          <div className="stat">
            <p>5 km/h</p>
            <p>Wind</p>
          </div>
          <div className="stat">
            <p>70%</p>
            <p>Humidity</p>
          </div>
          <div className="stat">
            <p>10 km</p>
            <p>Visibility</p>
          </div>
        </div>
      )}

      {showWeeklyForecast && (
        <div className="weekly-forecast">
          <h3>Weekly Forecast</h3>
          <div className="forecast-cards">
            {Array.from({ length: visibleCards }).map((_, index) => (
              <div className="forecast-card" key={index}>
                <p>{`Day ${index + 1}`}</p>
                <p>28°C</p>
                <p>Sunny</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
