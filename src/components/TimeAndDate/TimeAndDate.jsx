import React, { useEffect, useState } from "react";

import styles from "./TimeAndDate.module.css";

import sunriseSVG from "../../icons/sunrise.svg";
import sunsetSVG from "../../icons/sunset.svg";

import { dateBuilder, convertTo24HourFormat } from "../../utils/dateBuilder";


function TimeAndDate({ sunrise, sunset, weather }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { formattedDate, formattedTime, formattedMonth } =
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
          dangerouslySetInnerHTML={{ __html: formattedDate }}
          className={styles.date}
        ></div>

        <div className={styles.monthTimeContainer}>
          <div className={styles.month}>{formattedMonth}</div>
          <div className={styles.time}>{formattedTime}</div>
        </div>

        <div className={styles.riseSetContainer}>
          <div className={styles.riseSet}>
            <img src={sunriseSVG} alt={sunrise} />
            {formattedSunrise}
          </div>
          <div className={styles.setRise}>
            <img src={sunsetSVG} alt={sunset} /> {formattedSunset}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default TimeAndDate;
