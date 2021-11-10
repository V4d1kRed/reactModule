const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const getImageUrl = (imagePath) => {
  return `${IMAGE_URL}${imagePath}`;
};
