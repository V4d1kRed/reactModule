import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import themeSlice from './themeSlice';
import {combineReducers} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userSlice,
  movies: moviesSlice,
  theme: themeSlice,
});
