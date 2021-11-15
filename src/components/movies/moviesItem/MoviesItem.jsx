import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";
import {getImageUrl} from "../../../utils/getImageUrl";
import defaultImage from '../../../images/defaultImage.jpg';
import {getColorRating} from "../../../utils/getColorRating";
import PropTypes from "prop-types";

const MoviesItem = ({movie}) => {
  const history = useHistory();

  const handleClickTitle = () => {
    history.push(`/movie/${movie.id}`);
  };

  return (
    <Card
      sx={{
        boxShadow: 3,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
      <CardMedia
        sx={{flexGrow: 1}}
        component="img"
        image={movie.poster_path ? getImageUrl(movie.poster_path) : defaultImage}
        alt={'Poster: ' + movie.title}
      />
      <CardContent sx={{minHeight: '75px','&:last-child': {padding: '10px 15px'}}}>
        <Typography
          noWrap
          variant="h6"
          omponent="p"
          sx={{cursor: 'pointer'}}
          onClick={handleClickTitle}
        >
          {movie.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {movie.release_date}
        </Typography>
        <Typography className={`movies__rating ${getColorRating(movie.vote_average)}`} variant="span">
           {movie.vote_average}
        </Typography>
      </CardContent>
    </Card>
  );
};

MoviesItem.propTypes = {
  movie: PropTypes.object,
};

export default MoviesItem;
