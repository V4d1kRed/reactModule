import React from 'react';
import {Box, Container} from "@mui/material";
import ErrorImage from "../components/errorImage/ErrorImage";

const Error = () => {
  return (
    <Container>
      <Box className="error">
        <ErrorImage/>
      </Box>
    </Container>
  );
};

export default Error;
