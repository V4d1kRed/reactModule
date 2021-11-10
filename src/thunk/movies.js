import {fetchFoundMovies, fetchMovie, fetchMovies} from "../apis";
import {
  setFoundMovies,
  setMovie,
  setMovies,
  setTotalPages,
  toggleLoading
} from "../store/reducers/moviesSlice";

export const fetchMoviesAsync = (page) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const movies = await fetchMovies(page);
      dispatch(setMovies(movies.results));
      dispatch(setTotalPages(movies.total_pages));
      dispatch(toggleLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchMovieAsync = (movieId) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const movie = await fetchMovie(movieId);
      dispatch(setMovie(movie));
      dispatch(toggleLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchFoundMoviesAsync = (page, searchQuery) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const movies = await fetchFoundMovies(page, searchQuery);
      dispatch(setFoundMovies(movies.results));
      dispatch(setTotalPages(movies.total_pages));
      dispatch(toggleLoading());
      console.log('Found: ', movies);
    } catch (error) {
      console.error(error);
    }
  };
};
