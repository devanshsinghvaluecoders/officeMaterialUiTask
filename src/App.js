import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import GridContainer from './components/Grid/GridContainer';
import GridItem from './components/Grid/GridItem';
import Header from './components/Header';
import CustomModal from './components/modal/index';

import List from './components/Cards/list';
import { resetemp, updateemp } from './redux/action/EMPAction';

function App(props) {
  const { updateemp, Employee } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    updateemp('SelectedEmp', {});
    setOpen(true);
  };
  const handleClose = () => {
    updateemp('SelectedEmp', {});
    setOpen(false);
  };
  const handleEdit = (rep) => {
    updateemp('SelectedEmp', rep);
    setOpen(true);
  };
  const handleDelete = (rep) => {
    let InitEmp = [...Employee.Employee];

    InitEmp.splice(
      InitEmp.findIndex((x) => x.id === rep.id),
      1
    );
    updateemp('Count', InitEmp.length);
    updateemp('Employee', InitEmp);
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
        <List handleEdit={handleEdit} handleDelete={handleDelete} />
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
