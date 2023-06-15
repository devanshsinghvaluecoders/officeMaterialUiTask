import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
function Header({ handleOpen }) {
  return (
    <Fab
      color='primary'
      aria-label='add'
      style={{ float: 'right' }}
      onClick={handleOpen}
    >
      <AddIcon />
    </Fab>
  );
}

export default Header;
