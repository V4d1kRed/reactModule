import React from 'react';
import {Stack, Pagination} from "@mui/material";

const PaginationItem = ({count, page, onChange}) => {
  return (
    <Stack spacing={2} sx={{alignItems: 'center'}}>
      <Pagination count={count} page={page} onChange={onChange} variant="outlined" shape="rounded" siblingCount={3}/>
    </Stack>
  );
};

export default PaginationItem;
