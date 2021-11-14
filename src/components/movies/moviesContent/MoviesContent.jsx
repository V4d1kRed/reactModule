import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import MoviesSearch from "../moviesSearch/MoviesSearch";
import Progress from "../../UI/progress/Progress";
import MoviesList from "../moviesList/MoviesList";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviesAsync} from "../../../thunk";

const MoviesContent = () => {
  const dispatch = useDispatch();
  const {loading, movies, page, searchQuery, searchGenres, searchLanguage} = useSelector(state => state.movies);

  useEffect(() => {
    if (!movies.length && !searchQuery && !searchGenres.length && !searchLanguage) {
      dispatch(fetchMoviesAsync(page));
    }
  }, [dispatch, page, movies.length, searchQuery, searchGenres.length, searchLanguage]);

  return (
    <Box className="movies__content">
      <MoviesSearch/>
      {
        loading
          ? <Progress/>
          : movies.length ? <MoviesList/> : <h3>There are no movies that matched your query🤨</h3>
      }
    </Box>
  );
};

export default MoviesContent;
