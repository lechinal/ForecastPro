import React, { useState } from 'react';
import styles from './HourlyForecast.module.css';
import { dateBuilder } from '../../utils/dateBuilder';
import barometru from '../../icons/barometer.svg';

import CompressIcon from '@mui/icons-material/Compress';
import { kelvinToCelsius } from '../../utils/temperatureConversion.js';
import { degreesToDirection } from '../../utils/windDirection.js';
import humidity from '../../icons/humidity.svg';
import wind from '../../icons/wind.svg';

function HourlyForecast({ entry }) {
  const [showWindDetails, setShowWindDetails] = useState(false);

  const date = new Date(entry.dt * 1000);
  const { formattedDate, formattedMonth, formattedYear } = dateBuilder(date);
  const hours = date.getHours();
  const temperature = Math.round(entry.main.temp - 273.15);
  const feelsLike = kelvinToCelsius(entry.main.feels_like);
  const description = entry.weather[0].description;
  const iconUrl = `https://openweathermap.org/img/w/${entry.weather[0].icon}.png`;

  const handleToogleWindDetails = e => {
    e.stopPropagation();
    setShowWindDetails(!showWindDetails);
  };

  console.log(entry);

  return (
    <div className={styles.hourlyEntry}>
      <p
        dangerouslySetInnerHTML={{
          __html: `${formattedDate} ${formattedMonth} ${formattedYear}`,
        }}
      />

      <p>{`${hours}:00`}</p>
      <p>{`${temperature}°C`}</p>
      <p>{description}</p>
      <img src={iconUrl} alt="weather icon" width="35px" height="35px" />
      <p>Feels like: {feelsLike}℃</p>

      <div className={styles.details}>
        <CompressIcon sx={{ fill: 'white', fillOpacity: 0.4, width: '20px' }} />
        <p>{entry.main.pressure} hPa</p>
      </div>

      <div className={styles.details}>
        <img src={humidity} alt="rain" />
        <p>{entry.main.humidity}%</p>
      </div>

      {entry.rain && entry.rain['3h'] && (
        <div className={styles.details}>
          <img src={barometru} alt="rain" />
          <p>{entry.rain['3h']} mm</p>
        </div>
      )}

      <div className={styles.detailsWind} onClick={handleToogleWindDetails}>
        <img src={wind} alt="wind" />
        <p>{entry.wind.speed} m/s</p>
      </div>

      {showWindDetails && (
        <div className={styles.wind}>
          <p>Wind Dir: {degreesToDirection(entry.wind.deg)}</p>
          <p>Wind Gust: {entry.wind.gust} m/s</p>
          <p>Visibility: {entry.visibility / 1000} km</p>
        </div>
      )}
    </div>
  );
}

export default HourlyForecast;
