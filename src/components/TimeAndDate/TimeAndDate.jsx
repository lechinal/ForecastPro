import React, { useEffect, useState } from 'react';

import styles from './TimeAndDate.module.css';

import { WiTime2 } from 'weather-icons-react';
import { WiAlien } from 'weather-icons-react';
import sunriseSVG from '../../icons/sunrise.svg';
import sunsetSVG from '../../icons/sunset.svg';

import { dateBuilder, convertTo24HourFormat } from '../../utils/dateBuilder';

function TimeAndDate({ sunrise, sunset, weather }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { formattedDate, formattedTime, formattedMonth, formattedYear } =
    dateBuilder(currentDate);

  /**ora se actualizeaza continuu la fiecare secunda folosind useEffect pt a seta un interval care sa actualizeze timpul la fiecare secunda */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedSunrise = convertTo24HourFormat(sunrise);
  const formattedSunset = convertTo24HourFormat(sunset);

  return weather && sunrise && sunset ? (
    <div className={styles.timeAndDateContainer}>
      <div className={styles.details}>
        <div
          className={styles.date}
          dangerouslySetInnerHTML={{ __html: formattedDate }}
        ></div>

        <div className={styles.monthTimeContainer}>
          <div className={styles.box}>
            <WiAlien size={20} color="#767d85" />
            <p className={styles.month}>
              {formattedMonth} {formattedYear}
            </p>
          </div>

          <div className={styles.span}>
            <span className={styles.line}></span>
          </div>

          <div className={styles.box}>
            <WiTime2 size={20} color="#FF6B09" />
            <p className={styles.time}>{formattedTime}</p>
          </div>
        </div>

        <div className={styles.riseSetContainer}>
          <div className={styles.box}>
            <img src={sunriseSVG} alt={sunrise} className={styles.riseSet} />
            <p>{formattedSunrise}</p>
          </div>

          <div className={styles.span}>
            <span className={styles.line}></span>
          </div>
          <div className={styles.box}>
            <img src={sunsetSVG} alt={sunset} className={styles.riseSet} />
            <p>{formattedSunset}</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default TimeAndDate;
