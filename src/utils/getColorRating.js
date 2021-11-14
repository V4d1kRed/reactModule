export const getColorRating = (rating) => {
  if (rating >= 8) {
    return 'movies__rating--green';
  } else if (rating >= 6) {
    return 'movies__rating--orange';
  } else {
    return 'movies__rating--red';
  }
};
