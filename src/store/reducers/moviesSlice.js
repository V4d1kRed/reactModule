import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  totalPages: 0,
  searchQuery: '',
  searchGenres: [],
  searchLanguage: '',
  loading: false,
  movie: {},
  movies: [],
  favoriteMovies: [],
  moviesGenres: [],
  moviesLanguages: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovie(state, action) {
      state.movie = action.payload;
    },
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setMoviesGenres(state, action) {
      state.moviesGenres = action.payload;
    },
    setMoviesLanguages(state, action) {
      state.moviesLanguages = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSearchGenres(state, action) {
      state.searchGenres = action.payload;
    },
    setSearchLanguage(state, action) {
      state.searchLanguage = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    toggleLoading(state) {
      state.loading = !state.loading;
    },
    setFavoriteMovies(state, action) {
      state.favoriteMovies = action.payload;
    }
  }
});

export const {
  setMovie,
  setMovies,
  setTotalPages,
  toggleLoading,
  setSearchQuery,
  setPage,
  setMoviesGenres,
  setMoviesLanguages,
  setSearchGenres,
  setSearchLanguage,
  setFavoriteMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
