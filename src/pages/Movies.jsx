import React, {useEffect} from 'react';
import {Box, Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviesAsync} from "../thunk";
import MoviesFilters from "../components/movies/moviesFilters/MoviesFilters";
import MoviesContent from "../components/movies/moviesContent/MoviesContent";

const Movies = () => {
  const dispatch = useDispatch();
  const {page} = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesAsync(page));
  }, [dispatch, page]);

  return (
    <Container>
      <Box className="movies">
        <MoviesFilters/>
        <MoviesContent/>
      </Box>
    </Container>
  );
};

export default Movies;
