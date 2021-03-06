import React from 'react';
import {Box} from "@mui/material";

const Wrapper = ({children}) => {
  return (
    <Box className="wrapper">
      {children}
    </Box>
  );
};

export default Wrapper;
