import styles from './CityDetails.module.css';
function CityDetails({
  weather,

  tempMin,
  tempMax,
}) {
  return (
    <div className={styles.cityDetailsContainer}>
      {weather && Object.keys(weather).length !== 0 ? (
        <div className={styles.details}>
          <div className={styles.location}>
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="icon"
              width="75px"
              height="75px"
            />
            <h1>
              {weather.name}, {weather.sys && weather.sys.country}
            </h1>
          </div>

          <div className={styles.temperature}>
            <p className={styles.dailyTemp}>
              {weather.main && Math.floor(weather.main.temp - 273.15)}°C
            </p>
            <div className={styles.minmax}>
              <div className={styles.min}>
                <p className={styles.title}>min</p>
                <p className={styles.value}>{tempMin}</p>
              </div>
              <div className={styles.span}>
                <span className={styles.line}></span>
              </div>
              <div className={styles.max}>
                <p className={styles.title}>max</p>
                <p className={styles.value}>{tempMax}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CityDetails;
