import React from 'react';
import {Stack, Pagination} from "@mui/material";
import PropTypes from "prop-types";

const PaginationItem = ({count, page, onChange}) => {
  return (
    <Stack spacing={2} sx={{alignItems: 'center'}}>
      <Pagination
        shape="rounded"
        variant="outlined"
        page={page}
        count={count}
        onChange={onChange}
        siblingCount={1}
        boundaryCount={1}
      />
    </Stack>
  );
};

PaginationItem.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};

export default PaginationItem;
