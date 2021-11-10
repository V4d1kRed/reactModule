import React from 'react';
import {Box} from "@mui/material";
import MoviesSearch from "../moviesSearch/MoviesSearch";
import Progress from "../../UI/progress/Progress";
import MoviesList from "../moviesList/MoviesList";
import {useSelector} from "react-redux";

const MoviesContent = () => {
  const {loading} = useSelector(state => state.movies);

  return (
    <Box className="movies__content">
      <MoviesSearch/>
      {
        loading
          ? <Progress/>
          : <MoviesList/>
      }
    </Box>
  );
};

export default MoviesContent;
