import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import styles from './FavoriteCities.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ITEMS_PER_PAGE = 3;

function FavoriteCities({
  cities,
  onCityClick,
  onRemoveCityClick,
  addToFavorites,
  setCity,
}) {
  const [currentPage, setCurrentPage] = useState(0);

  const handleCityClick = selectedCity => {
    setCity(selectedCity);
    onCityClick(selectedCity);
  };

  const handleRemoveCity = (event, city) => {
    event.stopPropagation();
    onRemoveCityClick(city);
  };

  const goToPreviousPage = event => {
    event.stopPropagation();
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = event => {
    event.stopPropagation();
    setCurrentPage(currentPage + 1);
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleCities = cities.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className={styles.favoriteCities}>
      {/* <h2>Favorite Cities</h2> */}
      <ul className={styles.citiesList}>
        {visibleCities.map((city, index) => (
          <li key={index} className={styles.city}>
            <span onClick={() => handleCityClick(city)}>{city}</span>
            <div>
              <button onClick={event => handleRemoveCity(event, city)}>
                <div className={styles.buttonContent}>X</div>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.pagination}>
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
          className={styles.navButton}
        >
          <div className={styles.iconContainer}>
            <ArrowBackIosIcon />
          </div>
        </button>
        <button
          onClick={goToNextPage}
          disabled={startIndex + ITEMS_PER_PAGE >= cities.length}
          className={styles.navButton}
        >
          <div className={styles.iconContainer}>
            <ArrowForwardIosIcon />
          </div>
        </button>
      </div>
    </div>
  );
}

export default FavoriteCities;
