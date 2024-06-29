import React, { useEffect, useState } from "react";

import styles from "./TimeAndDate.module.css";

import sunriseSVG from "../../icons/sunrise.svg";
import sunsetSVG from "../../icons/sunset.svg";

import { dateBuilder, convertTo24HourFormat } from "../../utils/dateBuilder";

// const dateBuilder = (d) => {
//   let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   let days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   let day = days[(d.getDay() + 6) % 7].substring(0, 3);

//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let hours = d.getHours();
//   let minutes = d.getMinutes();
//   let seconds = d.getSeconds();

//   let dateSuffix = (date) => {
//     if (date > 3 && date < 21) return "th";
//     switch (date % 10) {
//       case 1:
//         return "st";
//       case 2:
//         return "nd";
//       case 3:
//         return "rd";
//       default:
//         return "th";
//     }
//   };

//   let formattedDate = `${date}<sup>${dateSuffix(
//     date
//   )}</sup> &nbsp;&nbsp;${day}`;
//   let formattedMonth = month;
//   let formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
//     seconds < 10 ? "0" + seconds : seconds
//   }`;

//   return { formattedDate, formattedMonth, formattedTime };
// };

// const currentDate = new Date();
// const { formattedDate, formattedTime, formattedMonth } =
//   dateBuilder(currentDate);

// const convertTo24HourFormat = (time12h) => {
//   if (!time12h) return "";

//   const [time, modifier] = time12h.split(" ");

//   let [hours, minutes] = time.split(":");

//   if (hours === "12") {
//     hours = "00";
//   }

//   if (modifier === "PM") {
//     hours = parseInt(hours, 10) + 12;
//   }

//   return `${hours}:${minutes}`;
// };

function TimeAndDate({ sunrise, sunset, weather }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { formattedDate, formattedTime, formattedMonth } =
    dateBuilder(currentDate);

  /**ora se actualizeaza continuu la fiecare secunda folosind useEffect pt a seta un interval care sa actualizeze timpul la fiecare secunda */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  //   if (!weather || !sunrise || !sunset) {
  //     return null; // Nu se randează nimic dacă lipsesc datele
  //   }

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
