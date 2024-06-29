import './App.css';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import { Loader } from './components/Loader/Loader';
import Header from './components/Header/Header';
// import Today from "./pages/Today/Today";
// import FiveDays from "./pages/FiveDays/FiveDays";
// import Navigation from "./components/Navigation/Navigation";
// import CityDetails from "./components/CityDetails/CityDetails";
import FavoriteCities from './components/FavoriteCities/FavoriteCities';

const Today = lazy(() => import('./pages/Today/Today'));
const FiveDays = lazy(() => import('./pages/FiveDays/FiveDays'));

function App() {
  console.log(localStorage);
  const storedCities = JSON.parse(localStorage.getItem('favoriteCities'));

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
      <div className="Header">
        <Header />
        <SearchBar
          setCity={setCity}
          addToFavorites={addToFavorites}
          favoriteCities={favoriteCities}
        />
      </div>

      {favoriteCities.length > 0 && (
        <div className="Favorites">
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
        <div className="Pages">
          <Routes>
            {/* <Route path="/" element={<Navigate to="/today" />} /> */}
            <Route path="/" element={<Today city={city} />} />
            {/* <Route path="/today" element={<Today city={city} />} /> */}
            <Route path="/fivedays" element={<FiveDays city={city} />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
