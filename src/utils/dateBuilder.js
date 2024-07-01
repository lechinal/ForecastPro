export const dateBuilder = d => {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  let day = days[(d.getDay() + 6) % 7].substring(0, 3);

  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  let dateSuffix = date => {
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  let formattedDate = `${date}<sup>${dateSuffix(
    date
  )}</sup> &nbsp;&nbsp;${day}`;
  let formattedMonth = month;
  let formattedYear = year;
  let formattedTime = `${d.getHours()}:${
    d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
  }:${d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()}`;

  return { formattedDate, formattedMonth, formattedTime, formattedYear };
};

export const convertTo24HourFormat = time12h => {
  // Verificare pentru cazurile unde timpul este nedefinit
  if (!time12h || typeof time12h !== 'string') return '';

  const [time, modifier] = time12h.split(' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
};
