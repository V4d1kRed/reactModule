import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {fetchFoundMoviesAsync} from "../../../thunk";
import {useDispatch, useSelector} from "react-redux";

const MoviesSearch = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const {page} = useSelector(state => state.movies);

  const handleChangeSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClickSearch = () => {
    if (searchQuery) {
      dispatch(fetchFoundMoviesAsync(page, searchQuery));
    }
  };

  return (
    <Box className="movies__search">
      <TextField
        value={searchQuery}
        fullWidth
        type="search"
        size="small"
        variant="outlined"
        label="Search for a movie..."
        onChange={handleChangeSearch}
      />
      <Button variant="contained" onClick={handleClickSearch}>Search</Button>
    </Box>
  );
};

export default MoviesSearch;
