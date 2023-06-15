import React from 'react';
import './App.css';

import GridContainer from './components/Grid/GridContainer';
import GridItem from './components/Grid/GridItem';
import Header from './components/Header';
import CustomModal from './components/modal/index';
import { connect } from 'react-redux';

import List from './components/Cards/list';
import { resetemp, updateemp } from './redux/action/EMPAction';

function App(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    props.updateemp('SelectedEmp', {});
    setOpen(true);
  };
  const handleClose = () => {
    props.updateemp('SelectedEmp', {});
    setOpen(false);
  };
  const handleEdit = (rep) => {
    props.updateemp('SelectedEmp', rep);
    setOpen(true);
  };
  return (
    <GridContainer>
      <GridItem>
        <Header handleOpen={handleOpen} />
      </GridItem>
      <GridItem>
        <CustomModal
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        />
      </GridItem>
      <GridItem>
        <List handleEdit={handleEdit} />
      </GridItem>
    </GridContainer>
  );
}

const mapStateToProps = (state) => ({
  Employee: state.Employee,
});

const mapDispatchToProps = {
  updateemp: updateemp,
  resetemp: resetemp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
