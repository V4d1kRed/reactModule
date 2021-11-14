import Movies from "../pages/Movies";
import Movie from "../pages/Movie";
import Account from "../pages/Account";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Favorites from "../pages/Favorites";
import Main from "../pages/Main";
import Session from "../pages/Session";

export const routes = [
  {path: '/movie/:movieId', component: Movie, isPrivate: true},
  {path: '/movie', component: Movies, isPrivate: true},
  {path: '/favorites', component: Favorites, isPrivate: true},
  {path: '/account', component: Account, isPrivate: true},
  {path: '/session', component: Session},
  {path: '/login', component: Login},
  {path: '/error', component: Error},
  {path: '/', component: Main},
];
