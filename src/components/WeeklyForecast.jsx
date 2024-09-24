import React from 'react';

function WeeklyForecast() {
  const forecast = [
    { day: '21 Jan', temp: 27, icon: 'rain' },
    { day: '22 Jan', temp: 24, icon: 'rain' },
    { day: '23 Jan', temp: 25, icon: 'rain' },
    { day: '24 Jan', temp: 28, icon: 'storm' }
  ];

  return (
    <div className="weekly-forecast">
      <h3>Prévisions hebdomadaires</h3>
      <div className="forecast-cards">
        {forecast.map((day, index) => (
          <div className="forecast-card" key={index}>
            <p>{day.temp}°</p>
            <p>{day.day}</p>
            <p>{day.icon === 'rain' ? '🌧️' : '⚡'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyForecast;