import React, { useState } from 'react';

import styles from './ForecastDetails.module.css';

// import { kelvinToCelsius } from "../../utils/temperatureConversion.js";
import { degreesToDirection } from '../../utils/windDirection.js';

import barometru from '../../icons/barometer.svg';
import humidity from '../../icons/humidity.svg';
import wind from '../../icons/wind.svg';

import CompressIcon from '@mui/icons-material/Compress';

function ForecastDetails({ entry }) {
  const [moreDetails, setMoreDetails] = useState('');

  const handleToogleMoreDetails = () => {
    setMoreDetails(!moreDetails);
  };

  return (
    <div className={styles.weatherDetails}>
      <div className={styles.weatherDescription}>
        <p>{entry.weather[0].description}</p>
      </div>
      {entry.rain && entry.rain['3h'] && (
        <div className={styles.details}>
          <img src={barometru} alt="rain" />
          <p>{entry.rain['3h']} mm</p>
        </div>
      )}

      <div className={styles.details}>
        <img src={humidity} alt="rain" />
        <p>{entry.main.humidity}%</p>
      </div>

      <div className={styles.details}>
        <img src={wind} alt="wind" />
        <p>{entry.wind.speed} m/s</p>
      </div>

      <div className={styles.details}>
        <CompressIcon sx={{ fill: 'white', fillOpacity: 0.4, width: '20px' }} />
        <p>{entry.main.pressure} hPa</p>
      </div>

      <button onClick={handleToogleMoreDetails}>
        {moreDetails ? 'Less Details' : 'More Details'}
      </button>
      {moreDetails && (
        <div>
          <p>Wind Direction: {degreesToDirection(entry.wind.deg)}</p>
          <p>Wind Gust: {entry.wind.gust} m/s</p>
          <p>Visibility: {entry.visibility / 1000} km</p>
        </div>
      )}
    </div>
  );
}

export default ForecastDetails;
