import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";
import {getImageUrl} from "../../../utils/getImageUrl";
import defaultImage from '../../../images/defaultImage.jpg';

const MoviesItem = ({movie}) => {
  const history = useHistory();

  const handleClickTitle = () => {
    history.push(`/movie/${movie.id}`);
  };

  return (
    <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <CardMedia
        sx={{flexGrow: 1}}
        component="img"
        image={movie.poster_path ? getImageUrl(movie.poster_path) : defaultImage}
        alt={'Poster: ' + movie.title}
      />
      <CardContent sx={{'&:last-child': {padding: '10px 15px'}}}>
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
      </CardContent>
    </Card>
  );
};

export default MoviesItem;
