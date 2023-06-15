import React from 'react';
import { connect } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';
import { Paper } from '@mui/material';
function Header({ handleOpen, Employee }) {
  return (
    <GridContainer>
      <GridItem md={12}>
        <Paper
          elevation={3}
          sx={{
            margin: '10px',
            fontSize: '30px',
            fontWeight: '600',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          Count:
          {Employee.Count}
          <Fab
            color='primary'
            aria-label='add'
            style={{ float: 'right' }}
            onClick={handleOpen}
          >
            <AddIcon />
          </Fab>
        </Paper>
      </GridItem>
    </GridContainer>
  );
}

const mapStateToProps = (state) => ({
  Employee: state.Employee,
});

export default connect(mapStateToProps, null)(Header);
