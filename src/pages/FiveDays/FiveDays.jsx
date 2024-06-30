import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './FiveDays.module.css';
import Navigation from '../../components/Navigation/Navigation.jsx';
import { api } from '../../api/api.js';
// import { dateBuilder } from "../../utils/dateBuilder.js";
import ForecastEntry from '../../components/ForecastEntry/ForecastEntry.jsx'; // Importăm componenta ForecastEntry
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function FiveDays({ city }) {
  const [forecast, setForecast] = useState([]);
  const [cityDetails, setCityDetails] = useState({});
  const [error, setError] = useState('');
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      try {
        const storedCity = localStorage.getItem('city');
        const storedCityDetails = localStorage.getItem('cityDetails');
        const storedForecast = localStorage.getItem('forecast');

        if (
          storedCity &&
          storedCityDetails &&
          storedForecast &&
          storedCity === city
        ) {
          setCityDetails(JSON.parse(storedCityDetails));
          setForecast(JSON.parse(storedForecast));
          setError('');
        } else {
          const geoResponse = await axios.get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api.key}`
          );

          if (geoResponse.data.length === 0) {
            setError('City not found!');
            return;
          }

          const { lat, lon, name, country } = geoResponse.data[0];
          setCityDetails({ city: name, country });

          const forecastResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api.key}`
          );

          const filteredForecast = filterForecastByDays(
            forecastResponse.data.list
          );

          setForecast(filteredForecast);
          setError('');

          localStorage.setItem('city', city);
          localStorage.setItem(
            'cityDetails',
            JSON.stringify({ city: name, country })
          );
          localStorage.setItem('forecast', JSON.stringify(filteredForecast));
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [city]);

  const filterForecastByDays = forecastList => {
    const uniqueDays = {};
    const filteredForecast = [];

    forecastList.forEach(entry => {
      const date = new Date(entry.dt * 1000);
      const today = new Date();
      // Setez ora de început a zilei curente
      today.setHours(0, 0, 0, 0);

      // Verific dacă data este astazi sau mai tarziu
      if (date >= today) {
        const dayKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

        if (!uniqueDays[dayKey]) {
          uniqueDays[dayKey] = true;
          filteredForecast.push(entry);
        }
      }
    });

    return filteredForecast.slice(0, 6);
  };

  const handleNext = () => {
    if (startIndex + 3 < forecast.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
  };

  console.log('cityDetails:', cityDetails);
  console.log('forecast:', forecast);

  return (
    <div className={styles.fiveDays}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      {error && <div className={styles.error}>{error}</div>}

      {cityDetails.city && cityDetails.country && (
        <div className={styles.title}>
          <h2>{`${cityDetails.city}, ${cityDetails.country}`}</h2>
        </div>
      )}

      {forecast.length > 0 ? (
        <>
          <div className={styles.forecast}>
            {forecast.slice(startIndex, startIndex + 3).map(entry => (
              <ForecastEntry key={entry.dt} entry={entry} />
            ))}
          </div>
          <div className={styles.pagination}>
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={styles.navButton}
            >
              <ArrowBackIosIcon />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + 3 >= forecast.length}
              className={styles.navButton}
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
        </>
      ) : (
        <p className={styles.noData}>
          No forecast data available. Please enter a city or select a favorite
          city!
        </p>
      )}
    </div>
  );
}

export default FiveDays;
