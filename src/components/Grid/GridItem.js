import { Grid } from '@mui/material';
import React from 'react';

export default function GridItem(props) {
  const { children, className, ...rest } = props;
  return (
    <Grid
      item
      {...rest}
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '1px',
        paddingRight: '15px',
        paddingLeft: '15px',
      }}
    >
      {children}
    </Grid>
  );
}
