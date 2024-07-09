import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Loader } from './components/Loader/Loader';
import Header from './components/Header/Header';

// import Navigation from "./components/Navigation/Navigation";
// import CityDetails from "./components/CityDetails/CityDetails";

import FavoriteCities from './components/FavoriteCities/FavoriteCities';

const Today = lazy(() => import('./pages/Today/Today'));
const FiveDays = lazy(() => import('./pages/FiveDays/FiveDays'));

function App() {
  console.log(localStorage);
  const storedCities = JSON.parse(localStorage.getItem('favoriteCities')) || [];

  const [city, setCity] = useState('');
  const [favoriteCities, setFavoriteCities] = useState(storedCities);

  const addToFavorites = cityName => {
    setFavoriteCities(prevCities => {
      if (!prevCities.includes(cityName)) {
        const updatedCities = [...prevCities, cityName];
        localStorage.setItem('favoriteCities', JSON.stringify(updatedCities));
        return updatedCities;
      } else {
        return prevCities;
      }
    });
  };

  const handleCityClick = selectedCity => {
    setCity(selectedCity);
  };

  const handleRemoveCity = cityToRemove => {
    setFavoriteCities(prevCities => {
      const updatedCities = prevCities.filter(city => city !== cityToRemove);
      localStorage.setItem('favoriteCities', JSON.stringify(updatedCities));
      return updatedCities;
    });
  };

  useEffect(() => {
    localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
  }, [favoriteCities]);

  return (
    <div className={styles.app}>
      <header>
        <Header />
        <SearchBar
          setCity={setCity}
          addToFavorites={addToFavorites}
          favoriteCities={favoriteCities}
        />
      </header>

      {favoriteCities.length > 0 && (
        <section className={styles.favCities}>
          <FavoriteCities
            cities={favoriteCities}
            onCityClick={handleCityClick}
            onRemoveCityClick={handleRemoveCity}
            addToFavorites={addToFavorites}
            setCity={setCity}
          />
        </section>
      )}

      <Suspense fallback={<Loader />}>
        <div>
          <Routes>
            <Route path="/" element={<Today city={city} />} />

            <Route path="/fivedays" element={<FiveDays city={city} />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
