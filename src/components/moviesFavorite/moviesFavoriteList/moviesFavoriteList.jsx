import React from 'react';
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import MoviesFavoriteItem from "../moviesFavoriteItem/moviesFavoriteItem";

const MoviesFavoriteList = () => {
  const {favoriteMovies} = useSelector(state => state.movies);

  return (
    <Box className="movies__list">
      {favoriteMovies.map(movie => <MoviesFavoriteItem movie={movie} key={movie.id}/>)}
    </Box>
  );
};

export default MoviesFavoriteList;
