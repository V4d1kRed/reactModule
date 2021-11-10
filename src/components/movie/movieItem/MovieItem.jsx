import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Box, Button} from "@mui/material";
import {getImageUrl} from "../../../utils/getImageUrl";
import defaultImage from '../../../images/defaultImage.jpg';

const MovieItem = () => {
  const history = useHistory();
  const {movie} = useSelector(state => state.movies);

  const handleClickGoBack = () => history.goBack();

  return (
    <Box>
      <h1>{movie.title}</h1>
      <img width='200px' src={movie.poster_path ? getImageUrl(movie.poster_path) : defaultImage} alt=""/>
      <Button variant="contained" color="info" onClick={handleClickGoBack}>
        Go back
      </Button>
    </Box>
  );
};

export default MovieItem;
