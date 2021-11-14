import React from 'react';
import {Box, Container} from "@mui/material";
import MoviesFilters from "../components/movies/moviesFilters/MoviesFilters";
import MoviesContent from "../components/movies/moviesContent/MoviesContent";

const Movies = () => {
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
