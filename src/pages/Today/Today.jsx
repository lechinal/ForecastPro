import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './Today.module.css';
import CityDetails from '../../components/CityDetails/CityDetails.jsx';
import TimeAndDate from '../../components/TimeAndDate/TimeAndDate.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';
import { api } from '../../api/api.js';
import Quote from '../../components/Quote/Quote.jsx';

function Today({ city }) {
  const [weather, setWeather] = useState({});
  // const [feelsLike, setFeelsLike] = useState("");
  // const [wind, setWind] = useState("");
  // const [humidity, setHumidity] = useState("");
  // const [pressure, setPressure] = useState("");
  const [tempMax, setTempMax] = useState('');
  const [tempMin, setTempMin] = useState('');
  // const [visibility, setVisibility] = useState("");
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');

  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `${api.base}weather?q=${city}&appid=${api.key}`
        );
        console.log(response.data);
        setWeather(response.data);
        setError('');
      } catch (error) {
        // console.log("There was an error fetching the weather data!", error);
        setError(
          'There was an error fetching the weather data! Please try again.'
        );
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  useEffect(() => {
    // Ma asigur că weather este definit și nu este gol
    if (Object.keys(weather).length !== 0) {
      // setFeelsLike(Math.floor(weather.main.feels_like - 273.15) + " ℃");
      // setWind(weather.wind.speed + " m/s");
      // setHumidity(weather.main.humidity + "%");
      // setPressure(weather.main.pressure + " hPa");
      setTempMax(Math.floor(weather.main.temp_max - 273.15) + ' ℃');
      setTempMin(Math.floor(weather.main.temp_min - 273.15) + ' ℃');
      // setVisibility(weather.visibility + " m");

      const sunriseTime = new Date(
        weather.sys.sunrise * 1000
      ).toLocaleTimeString();
      const sunsetTime = new Date(
        weather.sys.sunset * 1000
      ).toLocaleTimeString();
      setSunrise(sunriseTime);
      setSunset(sunsetTime);
    }
  }, [weather]);

  // console.log("Feels like:", feelsLike);
  // console.log("Wind:", wind);
  // console.log("Humidity:", humidity);
  // console.log("Pressure:", pressure);
  // console.log("Temp Max:", tempMax);
  // console.log("Temp Min:", tempMin);
  // console.log("Visibility:", visibility);
  // console.log("Sunrise:", sunrise);
  // console.log("Sunset:", sunset);

  return (
    <div className={styles.today}>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.cityDetails}>
        <CityDetails weather={weather} tempMin={tempMin} tempMax={tempMax} />
      </div>
      {city ? (
        <>
          <div className={styles.navigation}>
            <Navigation />
          </div>
          <div className={styles.timeAndDate}>
            <TimeAndDate sunrise={sunrise} sunset={sunset} weather={weather} />
          </div>
          <div className={styles.quoteBox}>
            <Quote />
          </div>
        </>
      ) : (
        <p className={styles.noData}>
          No weather data available. Please enter a city or select a favorite
          city!
        </p>
      )}
    </div>
  );
}

export default Today;
