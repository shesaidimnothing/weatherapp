import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import WeatherHeader from './components/WeatherHeader';
import TemperatureDisplay from './components/TempDisplay';
import DailySummary from './components/DailySummary';
import WeatherStats from './components/WeatherStats';
import WeeklyForecast from './components/WeeklyForecast';
import './App.css';
import BottomFooter from './components/BottomFooter';

function App() {
  return (
    <><div className="app">
      <div className="main-info">
        <WeatherHeader city="Paris" date="Lundi, 16 Septembre" summary="Ensoleillé" />
        <TemperatureDisplay temp={28} />
        <DailySummary />
      </div>
      <WeatherStats wind="2km/h" humidity="62%" visibility="1km" />
      <WeeklyForecast />
    </div><div><BottomFooter></BottomFooter></div></>
  );
}

export default App;