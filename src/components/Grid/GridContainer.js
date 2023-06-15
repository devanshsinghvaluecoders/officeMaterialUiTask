import { Grid } from '@mui/material';
import React from 'react';

export default function GridContainer(props) {
  const { children, ...rest } = props;
  return (
    <Grid
      container
      {...rest}
      sx={{ marginRight: '15px', marginLeft: '15px', width: 'auto' }}
    >
      {children}
    </Grid>
  );
}
