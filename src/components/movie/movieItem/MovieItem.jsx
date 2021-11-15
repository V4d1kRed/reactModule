import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {Alert, Box, Button, Container, IconButton, Snackbar} from "@mui/material";
import {getImageUrl} from "../../../utils/getImageUrl";
import defaultImage from '../../../images/defaultImage.jpg';
import {getBackgroundImageUrl} from "../../../utils/getBackgroundImageUrl";
import {getColorRating} from "../../../utils/getColorRating";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {setFavoriteMovie} from "../../../apis";

const MovieItem = () => {
  const [open, setOpen] = useState(false);
  const {movieId} = useParams();
  const history = useHistory();
  const {movie} = useSelector(state => state.movies);
  const {currentUser} = useSelector(state => state.user);
  const session_id = localStorage.getItem('session_id');
  const [favorite, setFavorite] = useState(movie.favorite);

  const handleClickGoBack = () => history.goBack();

  const backgroundImageStyles = {
    background:
      movie.backdrop_path
        ?
        `
          linear-gradient(to top, rgba(3,37,65,0.9), rgba(3,37,65,0.9)),
          url(${getBackgroundImageUrl(movie.backdrop_path)})
        `
        : 'rgba(3,37,65,0.9)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
  };

  const handleClick = async () => {
    await setFavoriteMovie(currentUser.id, movieId, session_id);
    setFavorite(true);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box className="movie__item">
      <Box className="movie__content" sx={backgroundImageStyles}>
        <Container>
          <Box className="movie__body">
            <img
              alt=""
              className="movie__image"
              src={movie.poster_path ? getImageUrl(movie.poster_path) : defaultImage}
            />
            <Box className="movie__info">
              <h1 className="movie__title">{movie.title} {movie.release_date ? `(${movie.release_date})` : null}</h1>
              <Box sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                <p className={`movie__rating ${getColorRating(movie.vote_average)}`}>{movie.vote_average}</p>
                <p>{movie.original_language ? movie.original_language : null}</p>
                <p>{movie.hasOwnProperty('genres') ? movie.genres.map(genre => genre.name).join(', ') : null}</p>
                <p>{movie.budget ? `${movie.budget}$` : null}</p>
                <p>{movie.runtime ? `${movie.runtime}m` : null}</p>
                <IconButton color={favorite ? 'success' : 'primary'} onClick={handleClick}>
                  <FavoriteIcon/>
                </IconButton>
                <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" variant="filled" sx={{width: '100%'}}>
                    {movie.title} was added to your favourite list.
                  </Alert>
                </Snackbar>
              </Box>
              {
                movie.tagline
                  ? <p className="movie__tagline"><em>{movie.tagline}</em></p>
                  : null
              }
              {
                movie.overview
                  ? <p className="movie__overview">{movie.overview}</p>
                  : null
              }
              <Button variant="contained" color="info" onClick={handleClickGoBack}>
                Go back
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MovieItem;
