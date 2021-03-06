import React from 'react';
import {AppBar, Box, Button, Toolbar} from "@mui/material";
import ThemeSwitch from "../UI/themeSwitch/ThemeSwitch";
import {useHistory} from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleClickMovies = () => history.push('/movie');
  const handleClickFavorites = () => history.push('/favorites');
  const handleClickAccount = () => history.push('/account');
  const handleClickLogin = () => history.push('/login');

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Button color="inherit" onClick={handleClickMovies}>Movies</Button>
            <Button color="inherit" onClick={handleClickFavorites}>Favorites</Button>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <ThemeSwitch/>
            <Button color="inherit" onClick={handleClickAccount}>Account</Button>
            <Button color="inherit" onClick={handleClickLogin}>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
