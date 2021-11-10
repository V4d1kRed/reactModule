import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography
} from "@mui/material";

const MoviesFilters = () => {
  return (
    <Box className="movies__filters">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Encountered two children with the same key, `Ndebele`. Keys should
            be unique so that components maintain their identity across updates.
            Non-unique keys may cause children to be duplicated and/or omitted — the behavior
            is unsupported and could change in a future version.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Button variant="contained">Search</Button>
    </Box>
  );
};

export default MoviesFilters;
