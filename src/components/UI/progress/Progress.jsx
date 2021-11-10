import React from 'react';
import {Box, CircularProgress} from "@mui/material";

const Progress = () => {
  return (
    <Box sx={{height: '40vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
      <CircularProgress/>
    </Box>
  );
};

export default Progress;
