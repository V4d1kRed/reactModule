import axios from "axios";

export const API_URL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL: API_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  }
});

export const fetchMovies = async (page) => {
  const {data} = await api.get('/movie/popular', {
    params: {
      page
    }
  });
  return data;
};

export const fetchMoviesGenres = async () => {
  const {data} = await api.get('/genre/movie/list');
  return data;
};

export const fetchMoviesLanguages = async () => {
  const {data} = await api.get('/configuration/languages');
  return data;
};

export const fetchMovie = async (movieId) => {
  const {data} = await api.get(`/movie/${movieId}`);
  return data;
};

export const fetchMovieState = async (movieId, session_id) => {
  const {data} = await api.get(`/movie/${movieId}/account_states`, {
    params: {
      session_id
    }
  });
  return data;
};

export const fetchMoviesBySearchQuery = async (page, searchQuery) => {
  const {data} = await api.get('/search/movie', {
    params: {
      page,
      query: searchQuery,
    }
  });
  return data;
};

export const fetchMoviesByGenres = async (page, genres) => {
  const {data} = await api.get('/discover/movie', {
    params: {
      page,
      with_genres: genres.join(', '),
    }
  });
  return data;
};

export const fetchMoviesByLanguage = async (page, language) => {
  const {data} = await api.get('/discover/movie', {
    params: {
      page,
      with_original_language: language,
    }
  });
  return data;
};

export const fetchMoviesByFilters = async (page, genres, language) => {
  const {data} = await api.get('/discover/movie', {
    params: {
      page,
      with_genres: genres.join(', '),
      with_original_language: language,
    }
  });
  return data;
};

export const fetchAccount = async (session_id) => {
  const {data} = await api.get('/account', {
    params: {
      session_id
    }
  });
  return data;
};

export const fetchRequestToken = async () => {
  const {data} = await api.get('/authentication/token/new');
  localStorage.setItem('request_token', data.request_token);
  return data;
};

export const fetchSessionId = async (request_token) => {
  const {data} = await api.post('/authentication/session/new', {
    request_token
  });
  return data;
};

export const fetchFavoriteMovies = async (accountId, session_id) => {
  const {data} = await api.get(`/account/${accountId}/favorite/movies`, {
    params: {
      session_id
    }
  });
  return data;
};

export const setFavoriteMovie = async (account_id, movieId, session_id) => {
  const {data} = await api.post(`/account/${account_id}/favorite`,
    {
      media_type: 'movie',
      media_id: movieId,
      favorite: true,
    },
    {
      params: {
        session_id
      }
    },
  );
  return data;
};
