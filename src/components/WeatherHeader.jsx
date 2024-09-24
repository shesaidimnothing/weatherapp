import React from 'react';

function WeatherHeader({ city, date, summary }) {
  return (
    <div className="weather-header">
      <h1>{city}</h1>
      <div className="weather-date">{date}</div>
      <div className="weather-summary">{summary}</div>
    </div>
  );
}

export default WeatherHeader;
