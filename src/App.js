import './App.css';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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
    <div className="App">
      <section>
        <Header />
        <SearchBar
          setCity={setCity}
          addToFavorites={addToFavorites}
          favoriteCities={favoriteCities}
        />
      </section>

      {favoriteCities.length > 0 && (
        <div>
          <FavoriteCities
            cities={favoriteCities}
            onCityClick={handleCityClick}
            onRemoveCityClick={handleRemoveCity}
            addToFavorites={addToFavorites}
            setCity={setCity}
          />
        </div>
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
