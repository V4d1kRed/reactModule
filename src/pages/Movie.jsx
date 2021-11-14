import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import {fetchMovieAsync} from "../thunk/movies";
import {useDispatch, useSelector} from "react-redux";
import Progress from "../components/UI/progress/Progress";
import MovieItem from "../components/movie/movieItem/MovieItem";

const Movie = () => {
  const {movieId} = useParams();
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovieAsync(movieId));
  }, [dispatch, movieId]);

  return (
    <Box className="movie">
      {
        loading
          ? <Progress/>
          : <MovieItem/>
      }
    </Box>
  );
};

export default Movie;
