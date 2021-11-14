import {
  fetchMovie,
  fetchMovies,
  fetchMoviesGenres,
  fetchMoviesByGenres,
  fetchMoviesLanguages,
  fetchMoviesByFilters,
  fetchMoviesByLanguage,
  fetchMoviesBySearchQuery,
  fetchFavoriteMovies,
  fetchMovieState,
} from "../apis";
import {
  setMovie,
  setMovies,
  setTotalPages,
  toggleLoading,
  setMoviesGenres,
  setMoviesLanguages,
  setFavoriteMovies,
} from "../store/reducers/moviesSlice";

export const fetchMovieAsync = (movieId) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const session_id = localStorage.getItem('session_id');
      const movieInfo = await fetchMovie(movieId);
      const movieState = await fetchMovieState(movieId, session_id);
      const movie = Object.assign(movieState, movieInfo);
      dispatch(setMovie(movie));
      dispatch(toggleLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

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

export const fetchMoviesBySearchQueryAsync = (page, searchQuery) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const moviesFound = await fetchMoviesBySearchQuery(page, searchQuery);
      dispatch(setMovies(moviesFound.results));
      dispatch(setTotalPages(moviesFound.total_pages));
      dispatch(toggleLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchMoviesByFiltersAsync = (page, searchGenres, searchLanguage) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      if (searchGenres.length && searchLanguage) {
        const moviesByFilters = await fetchMoviesByFilters(page, searchGenres, searchLanguage);
        dispatch(setMovies(moviesByFilters.results));
        dispatch(setTotalPages(moviesByFilters.total_pages));
      } else if (searchGenres.length) {
        const moviesByGenres = await fetchMoviesByGenres(page, searchGenres);
        dispatch(setMovies(moviesByGenres.results));
        dispatch(setTotalPages(moviesByGenres.total_pages));
      } else if (searchLanguage.length) {
        const moviesByLanguage = await fetchMoviesByLanguage(page, searchLanguage);
        dispatch(setMovies(moviesByLanguage.results));
        dispatch(setTotalPages(moviesByLanguage.total_pages));
      }
      dispatch(toggleLoading());
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchMoviesFiltersParametersAsync = () => {
  return async (dispatch) => {
    try {
      const moviesGenres = await fetchMoviesGenres();
      const moviesLanguages = await fetchMoviesLanguages();
      dispatch(setMoviesGenres(moviesGenres.genres));
      dispatch(setMoviesLanguages(moviesLanguages));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchFavoriteMoviesAsync = (accountId) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const session_id = localStorage.getItem('session_id');
      const favoriteMovies = await fetchFavoriteMovies(accountId, session_id);
      dispatch(setFavoriteMovies(favoriteMovies.results));
      dispatch(toggleLoading());
    } catch (error) {
      console.error(error);
    }
  };
};
