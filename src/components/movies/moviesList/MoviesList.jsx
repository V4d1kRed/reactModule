import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MoviesItem from "../moviesItem/MoviesItem";
import {Box} from "@mui/material";
import PaginationItem from "../../UI/paginationItem/PaginationItem";
import {setPage} from "../../../store/reducers/moviesSlice";

const MoviesList = () => {
  const dispatch = useDispatch();
  const {movies, page, totalPages} = useSelector(state => state.movies);

  const changePage = (event, value) => {
    dispatch(setPage(value));
  };

  return (
    <Fragment>
      <Box className="movies__list">
        {movies.map(movie => <MoviesItem movie={movie} key={movie.id}/>)}
      </Box>
      <PaginationItem count={totalPages} page={page} onChange={changePage}/>
    </Fragment>
  );
};

export default MoviesList;
