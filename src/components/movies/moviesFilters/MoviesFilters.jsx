import React, {useEffect} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select,
  Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
  fetchMoviesAsync,
  fetchMoviesByFiltersAsync,
  fetchMoviesFiltersParametersAsync
} from "../../../thunk";
import {setPage, setSearchGenres, setSearchLanguage, setSearchQuery} from "../../../store/reducers/moviesSlice";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MoviesFilters = () => {
  const dispatch = useDispatch();
  const {
    page,
    movies,
    searchQuery,
    moviesGenres,
    searchGenres,
    searchLanguage,
    moviesLanguages,
  } = useSelector(state => state.movies);

  useEffect(() => {
    if (!moviesGenres.length && !moviesLanguages.length) {
      dispatch(fetchMoviesFiltersParametersAsync());
    }
  }, [dispatch, moviesGenres.length, moviesLanguages.length]);

  const handleChangeGenres = (event) => {
    const {
      target: {value},
    } = event;
    dispatch(setPage(1));
    dispatch(setSearchGenres(typeof value === 'string' ? value.split(', ') : value));
    dispatch(fetchMoviesByFiltersAsync(page, value, searchLanguage));
  };

  const handleChangeLanguage = (event) => {
    dispatch(setPage(1));
    dispatch(setSearchLanguage(event.target.value));
    dispatch(fetchMoviesByFiltersAsync(page, searchGenres, event.target.value));
  };

  const handleClickReset = () => {
    dispatch(setPage(1));
    if (movies.length) {
      dispatch(fetchMoviesAsync(page));
    }
    dispatch(setSearchQuery(''));
    dispatch(setSearchGenres([]));
    dispatch(setSearchLanguage(''));
  };

  return (
    <Box className="movies__filters">
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl fullWidth size="small" sx={{maxWidth: '250px', marginBottom: '15px'}}>
            <InputLabel>Genres</InputLabel>
            <Select
              multiple
              value={searchGenres}
              onChange={handleChangeGenres}
              input={<OutlinedInput label="Genres"/>}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {moviesGenres.map((genre) => (
                <MenuItem key={genre.id} value={genre.id}>
                  <Checkbox checked={searchGenres.indexOf(genre.id) > -1}/>
                  <ListItemText primary={genre.name}/>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" sx={{marginBottom: '15px'}}>
            <InputLabel>Language</InputLabel>
            <Select
              value={searchLanguage}
              label="language"
              onChange={handleChangeLanguage}
              MenuProps={MenuProps}
            >
              {
                moviesLanguages.map((language) => (
                  <MenuItem
                    key={language.iso_639_1}
                    value={language.iso_639_1}
                  >
                    {language.english_name}, {language.iso_639_1}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <Button
            disabled={searchGenres.length || searchLanguage || searchQuery ? false : true}
            fullWidth
            color="error"
            variant="contained"
            onClick={handleClickReset}
          >
            Reset filters
          </Button>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MoviesFilters;
