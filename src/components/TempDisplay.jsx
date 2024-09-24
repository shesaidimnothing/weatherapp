import React from 'react';

function TemperatureDisplay({ temp }) {
  return (
    <div className="temperature-display">
      <h1>{temp}°</h1>
    </div>
  );
}

export default TemperatureDisplay;
