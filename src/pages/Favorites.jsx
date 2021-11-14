import React, {useEffect} from 'react';
import {Box, Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchFavoriteMoviesAsync} from "../thunk";
import Progress from "../components/UI/progress/Progress";
import MoviesFavoriteList from "../components/moviesFavorite/moviesFavoriteList/moviesFavoriteList";

const Favorites = () => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.user);
  const {favoriteMovies, loading} = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchFavoriteMoviesAsync(currentUser.id));
  }, [dispatch, currentUser]);

  return (
    <Container>
      <Box className="favorites">
        {
          loading
            ? <Progress/>
            : favoriteMovies.length ? <MoviesFavoriteList/> : <h3>Favorite movies list is empty🤨</h3>
        }
      </Box>
    </Container>
  );
};

export default Favorites;
