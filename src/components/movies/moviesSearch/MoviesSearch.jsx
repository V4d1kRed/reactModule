import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {fetchMoviesBySearchQueryAsync} from "../../../thunk";
import {useDispatch, useSelector} from "react-redux";
import {setPage, setSearchQuery} from "../../../store/reducers/moviesSlice";

const MoviesSearch = () => {
  const dispatch = useDispatch();
  const {page, searchQuery} = useSelector(state => state.movies);

  const handleChangeSearch = (event) => {
    dispatch(setPage(1));
    dispatch(setSearchQuery(event.target.value));
  };

  const handleClickSearch = () => {
    dispatch(fetchMoviesBySearchQueryAsync(page, searchQuery));
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
      <Button
        disabled={searchQuery ? false : true}
        variant="contained"
        onClick={handleClickSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default MoviesSearch;
