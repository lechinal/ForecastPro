import React, { useState } from 'react';
import styles from './ForecastEntry.module.css';
import { dateBuilder } from '../../utils/dateBuilder';
import ForecastDetails from '../ForecastDetails/ForecastDetails';
import { kelvinToCelsius } from '../../utils/temperatureConversion.js';

const ForecastEntry = ({ entry }) => {
  const [showDetails, setShowDetails] = useState(false);

  const date = new Date(entry.dt * 1000);
  const { formattedDate, formattedMonth } = dateBuilder(date);
  const iconUrl = `https://openweathermap.org/img/w/${entry.weather[0].icon}.png`;
  const temp = kelvinToCelsius(entry.main.temp);
  const tempMin = kelvinToCelsius(entry.main.temp_min);
  const tempMax = kelvinToCelsius(entry.main.temp_max);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.forecastEntry}>
      <div dangerouslySetInnerHTML={{ __html: formattedDate }}></div>
      <p>{formattedMonth}</p>
      <img src={iconUrl} alt="weather icon" width="75px" height="75px" />
      <div className={styles.temp}> {temp} ℃</div>
      <div>Feels like: {kelvinToCelsius(entry.main.feels_like)}℃</div>
      <div className={styles.minMaxtemp}>
        <div className={styles.minMax}>
          <p>min:</p>
          <p>{tempMin} ℃</p>
        </div>
        <div className={styles.span}>
          <span>|</span>
        </div>
        <div className={styles.minMax}>
          <p>max:</p>
          <p>{tempMax} ℃</p>
        </div>
      </div>

      <button onClick={handleToggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <ForecastDetails entry={entry} />}
    </div>
  );
};

export default ForecastEntry;
