import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "../../../theme";
import {useSelector} from "react-redux";

const Theme = ({children}) => {
  const {theme} = useSelector(state => state.theme);
  const selectedTheme = createTheme(theme === 'light' ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
