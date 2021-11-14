const IMAGE_URL = 'https://image.tmdb.org/t/p/w1280';

export const getBackgroundImageUrl = (imagePath) => {
  return `${IMAGE_URL}${imagePath}`;
};
