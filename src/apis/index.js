import axios from "axios";

export const API_URL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL: API_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  }
});

export const fetchLanguages = async () => {
  const {data} = await api.get('/configuration/languages');
  return data;
};

export const fetchMovies = async (page) => {
  const {data} = await api.get('/movie/popular', {
    params: {
      page
    }
  });
  return data;
};

export const fetchMovie = async (movieId) => {
  const {data} = await api.get(`/movie/${movieId}`);
  return data;
};

export const fetchFoundMovies = async (page, searchQuery) => {
  const {data} = await api.get('/search/movie', {
    params: {
      page,
      query: searchQuery,
    }
  });
  return data;
};
