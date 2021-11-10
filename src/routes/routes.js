import Movies from "../pages/Movies";
import Movie from "../pages/Movie";
import Account from "../pages/Account";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Favorites from "../pages/Favorites";
import Main from "../pages/Main";

export const routes = [
  {path: '/movie', component: Movies, isPrivat: true},
  {path: '/movie/:movieId', component: Movie, isPrivat: true},
  {path: '/favorites', component: Favorites, isPrivat: true},
  {path: '/account', component: Account, isPrivat: true},
  {path: '/login', component: Login},
  {path: '/error', component: Error},
  {path: '/', component: Main},
];
