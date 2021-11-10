import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  movie: {},
  movies: [],
  foundMovies: [],
  page: 1,
  totalPages: 0,
  loading: false,
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
    setFoundMovies(state, action) {
      state.foundMovies = action.payload;
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
  }
});

export const {
  setMovie,
  setMovies,
  setTotalPages,
  toggleLoading,
  setFoundMovies,
  setPage,
} = moviesSlice.actions;
export default moviesSlice.reducer;
