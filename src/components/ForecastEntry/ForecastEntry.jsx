import React, { useState } from 'react';
import styles from './ForecastEntry.module.css';
import { dateBuilder } from '../../utils/dateBuilder';
import ForecastDetails from '../ForecastDetails/ForecastDetails';
import { kelvinToCelsius } from '../../utils/temperatureConversion.js';

const ForecastEntry = ({ entry, onSelect }) => {
  const [showDetails, setShowDetails] = useState(false);

  const date = new Date(entry.dt * 1000);
  const { formattedDate, formattedMonth } = dateBuilder(date);
  const iconUrl = `https://openweathermap.org/img/w/${entry.weather[0].icon}.png`;
  const temp = kelvinToCelsius(entry.main.temp);
  const tempMin = kelvinToCelsius(entry.main.temp_min);
  const tempMax = kelvinToCelsius(entry.main.temp_max);
  const feelsLike = kelvinToCelsius(entry.main.feels_like);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleDayClick = () => {
    onSelect(date);
  };

  return (
    <div className={styles.forecastEntry}>
      <div
        className={styles.formatedDate}
        dangerouslySetInnerHTML={{ __html: formattedDate }}
      ></div>
      <p className={styles.formatedMonth}> {formattedMonth}</p>
      <img src={iconUrl} alt="weather icon" width="75px" height="75px" />
      <div className={styles.temp}> {temp} °C</div>
      <div className={styles.feelsLike}>
        Feels like: <p className={styles.feelsLikeTemp}>{feelsLike} °C</p>
      </div>

      <div className={styles.minMaxtempBox}>
        <div className={styles.minMax}>
          <p>min</p>
          <p className={styles.tempMinMax}>{tempMin}° </p>
        </div>

        <div className={styles.span}>
          <span className={styles.line}></span>
        </div>

        <div className={styles.minMax}>
          <p>max</p>
          <p className={styles.tempMinMax}>{tempMax}° </p>
        </div>
      </div>

      <button className={styles.moreInfo} onClick={handleToggleDetails}>
        {showDetails ? 'less info' : 'more info'}
      </button>

      <button className={styles.hoursInfo} onClick={handleDayClick}>
        3 hour info
      </button>
      {showDetails && <ForecastDetails entry={entry} />}
    </div>
  );
};

export default ForecastEntry;
