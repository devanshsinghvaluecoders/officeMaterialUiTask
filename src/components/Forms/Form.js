import React from 'react';
import { connect } from 'react-redux';
import { Field, getFormValues, reduxForm } from 'redux-form';
import { renderTextField } from '../reduxformCompoents';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import { Button } from '@mui/material';
import { resetemp, updateemp } from '../../redux/action/EMPAction';
import uuid from 'react-uuid';
function CustomForm(props) {
  const Fields = [
    {
      key: 'name',
      name: 'name',
    },
    {
      key: 'age',
      name: 'age',
    },
    {
      key: 'gender',
      name: 'gender',
    },
    {
      key: 'email',
      name: 'email',
    },

    {
      key: 'contact_no',
      name: 'contact no',
    },
    {
      key: 'address_1',
      name: 'address 1',
    },
    {
      key: 'address_2',
      name: 'address 2',
    },
    {
      key: 'Country',
      name: 'Country',
    },
    {
      key: 'State',
      name: 'State',
    },
    {
      key: 'City',
      name: 'City',
    },
    {
      key: 'Pincode',
      name: 'Pincode',
    },
  ];
  const {
    UserDetailsForm,
    updateemp,
    Employee,
    handleClose,
    pristine,
    submitting,
  } = props;
  const handleSubmit = () => {
    let InitEmp = [...Employee.Employee];

    if (Object.entries(Employee?.SelectedEmp)?.length > 0) {
      const foundIndex = InitEmp.findIndex((x) => x.id === UserDetailsForm.id);
      InitEmp[foundIndex] = UserDetailsForm;
    } else {
      InitEmp.push({ id: uuid(), ...UserDetailsForm });
    }
    updateemp('Count', InitEmp.length);
    updateemp('Employee', InitEmp);
    handleClose();
  };
  return (
    <GridContainer>
      {Fields.map((rep) => (
        <GridItem md={6}>
          <Field
            id={rep.key}
            fullWidth={true}
            name={rep.key}
            label={rep.name}
            component={renderTextField}
          />
        </GridItem>
      ))}
      <Button disabled={pristine || submitting} onClick={handleSubmit}>
        {Object.entries(Employee?.SelectedEmp)?.length > 0
          ? 'Update'
          : ' Submit'}
      </Button>
      <Button disabled={pristine || submitting} onClick={() => props.reset()}>
        clear
      </Button>
    </GridContainer>
  );
}

const mapStateToProps = (state) => ({
  UserDetailsForm: getFormValues('UserDetailsForm')(state),
  Employee: state.Employee,
  initialValues: state.Employee.SelectedEmp,
});

const mapDispatchToProps = {
  updateemp: updateemp,
  resetemp: resetemp,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'UserDetailsForm',
    // validate,
    enableReinitialize: true,
    forceUnregisterOnUnmount: true,
    destroyOnUnmount: false,
  })(CustomForm)
);
