import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './FiveDays.module.css';
import Navigation from '../../components/Navigation/Navigation.jsx';
import { api } from '../../api/api.js';
// import { dateBuilder } from "../../utils/dateBuilder.js";
import ForecastEntry from '../../components/ForecastEntry/ForecastEntry.jsx'; // Importăm componenta ForecastEntry
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import HourlyForecast from '../../components/HourlyForecast/HourlyForecast'; // Import

function FiveDays({ city }) {
  const [forecast, setForecast] = useState([]);
  const [cityDetails, setCityDetails] = useState({});
  const [error, setError] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  // State pentru ziua selectata
  const [selectedDay, setSelectedDay] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [showHourlyForecast, setShowHourlyForecast] = useState(false);
  const [daysPerPage, setDaysPerPage] = useState(3);
  const [visibleEntries, setVisibleEntries] = useState(8);
  const [hourlyPage, setHourlyPage] = useState(0);

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      try {
        const storedCity = localStorage.getItem('city');
        const storedCityDetails = localStorage.getItem('cityDetails');
        const storedForecast = localStorage.getItem('forecast');
        const storedHourlyForecast = localStorage.getItem('hourlyForecast');

        if (
          storedCity &&
          storedCityDetails &&
          storedForecast &&
          storedHourlyForecast &&
          storedCity === city
        ) {
          setCityDetails(JSON.parse(storedCityDetails));
          setForecast(JSON.parse(storedForecast));
          setHourlyForecast(JSON.parse(storedHourlyForecast));
          // setShowHourlyForecast(JSON.parse(storedHourlyForecast));
          setShowHourlyForecast(!!storedHourlyForecast);
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
          setHourlyForecast(forecastResponse.data.list);

          setError('');

          localStorage.setItem('city', city);
          localStorage.setItem(
            'cityDetails',
            JSON.stringify({ city: name, country })
          );
          localStorage.setItem('forecast', JSON.stringify(filteredForecast));
          localStorage.setItem(
            'hourlyForecast',
            JSON.stringify(forecastResponse.data.list)
          );
          setShowHourlyForecast(true);
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
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextHourly = () => {
    if (
      hourlyPage + 1 <
      Math.ceil(filterHourlyForecast().length / visibleEntries)
    ) {
      setHourlyPage(hourlyPage + 1);
    }
  };

  const handlePrevHourly = () => {
    if (hourlyPage - 1 >= 0) {
      setHourlyPage(hourlyPage - 1);
    }
  };

  // Funcția pentru selectarea unei zile în componenta ForecastEntry

  const handleDaySelect = selectedDate => {
    setSelectedDay(selectedDate);
    setShowHourlyForecast(true);
    setHourlyPage(0);
  };

  // Funcția simplificată pentru filtrarea prognozei orare pe baza zilei selectate
  const filterHourlyForecast = () => {
    if (!selectedDay) return []; 
    // Dacă nu este selectată nicio zi, returnează un array gol

    const filteredHourly = hourlyForecast.filter(entry => {
      const entryDate = new Date(entry.dt * 1000);
      return (
        entryDate.getFullYear() === selectedDay.getFullYear() &&
        entryDate.getMonth() === selectedDay.getMonth() &&
        entryDate.getDate() === selectedDay.getDate()
      );
    });

    return filteredHourly;
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setDaysPerPage(1);
        setVisibleEntries(1);
      } else if (width <= 768) {
        setDaysPerPage(3);
        setVisibleEntries(3);
      } else if (width <= 1024) {
        setDaysPerPage(5);
        setVisibleEntries(5);
      } else if (width <= 1200) {
        setDaysPerPage(8);
        setVisibleEntries(8);
      } else {
        setDaysPerPage(9);
        setVisibleEntries(9);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // console.log('cityDetails:', cityDetails);
  // console.log('forecast:', forecast);
  // console.log('hourlyForecast:', hourlyForecast);

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
            {forecast.slice(startIndex, startIndex + daysPerPage).map(entry => (
              <ForecastEntry
                key={entry.dt}
                entry={entry}
                onSelect={handleDaySelect}
              />
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

          {showHourlyForecast && selectedDay && (
            <div className={styles.hourlyForecast}>
              <h3>Hourly Forecast</h3>
              <div className={styles.hourlyEntries}>
                {filterHourlyForecast()
                  .slice(
                    hourlyPage * visibleEntries,
                    (hourlyPage + 1) * visibleEntries
                  )
                  .map(entry => (
                    <HourlyForecast key={entry.dt} entry={entry} />
                  ))}
              </div>
              
              <div className={styles.hourlyPagination}>
                <button
                  onClick={handlePrevHourly}
                  disabled={hourlyPage === 0}
                  className={styles.navButton}
                >
                  <ArrowBackIosIcon />
                </button>
                <button
                  onClick={handleNextHourly}
                  disabled={
                    (hourlyPage + 1) * visibleEntries >=
                    filterHourlyForecast().length
                  }
                  className={styles.navButton}
                >
                  <ArrowForwardIosIcon />
                </button>
              </div>
            </div>
          )}
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
