import React, { useState } from 'react';
// import axios from "axios";
import styles from './SearchBar.module.css';

import Box from '@mui/material/Box';
import { TextField, InputAdornment } from '@mui/material';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import StarBorderIcon from '@mui/icons-material/StarBorder';

// const api = {
//   key: "8d4cdf8f8a1e4cb1a3f8e886d69e86c3",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

function SearchBar({ setCity, addToFavorites, favoriteCities }) {
  const [cityInput, setCityInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (cityInput) {
      setCity(cityInput);
      setCityInput('');
    }
  };

  const handleAddToFavorites = () => {
    if (cityInput && !favoriteCities.includes(cityInput)) {
      addToFavorites(cityInput);
      setCityInput('');
    }
  };

  return (
    <div className={styles.search}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="filled-basic"
          label="Enter the city"
          variant="outlined"
          value={cityInput}
          onChange={e => setCityInput(e.target.value)}
          sx={{
            '& .MuiInputLabel-root': {
              color: '#000000',
            },
            '& .MuiInputBase-root': {
              backgroundColor: 'white',
              width: '100%',
              height: '48px',
              borderRadius: '30px',
              borderColor: 'white',
              '&:focus': {
                backgroundColor: '#000000',
              },
              '&:focus-within': {
                backgroundColor: 'lightblue',
              },
            },
            '& .Mui-focused .MuiSvgIcon-root.LocationSearchingIcon': {
              color: '#ce9233',
            },
            '& .MuiSvgIcon-root.StarBorderIcon:hover': {
              color: '#ce9233',
              cursor: 'pointer',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationSearchingIcon className="LocationSearchingIcon" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <StarBorderIcon
                  onClick={handleAddToFavorites}
                  className="StarBorderIcon"
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
}

export default SearchBar;
