import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MoviesItem from "../moviesItem/MoviesItem";
import {Box} from "@mui/material";
import PaginationItem from "../../UI/paginationItem/PaginationItem";
import {setPage} from "../../../store/reducers/moviesSlice";
import {fetchMoviesAsync, fetchMoviesByFiltersAsync, fetchMoviesBySearchQueryAsync} from "../../../thunk";

const MoviesList = () => {
  const dispatch = useDispatch();
  const {movies, page, totalPages, searchQuery, searchGenres, searchLanguage} = useSelector(state => state.movies);

  const changePage = (event, page) => {
    dispatch(setPage(page));
    if (searchGenres.length || searchLanguage.length) {
      dispatch(fetchMoviesByFiltersAsync(page, searchGenres, searchLanguage));
    } else if (searchQuery) {
      dispatch(fetchMoviesBySearchQueryAsync(page, searchQuery));
    } else {
      dispatch(fetchMoviesAsync(page));
    }
  };

  return (
    <Fragment>
      <Box className="movies__list">
        {movies.map(movie => <MoviesItem movie={movie} key={movie.id}/>)}
      </Box>
      {
        totalPages > 1
          ? <PaginationItem count={totalPages} page={page} onChange={changePage}/>
          : null
      }
    </Fragment>
  );
};

export default MoviesList;
