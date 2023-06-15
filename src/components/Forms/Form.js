import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Field, getFormValues, reduxForm } from 'redux-form';
import {
  renderAutoCompleteField,
  renderSelectField,
  renderTextField,
} from '../reduxformCompoents';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import { Button } from '@mui/material';
import { resetemp, updateemp } from '../../redux/action/EMPAction';
import uuid from 'react-uuid';
import { StatesCity } from '../utils';
const validate = (values, allvalues) => {
  let errors = {};
  if (values.email?.length > 0) {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
        values.email
      )
    ) {
      errors['email'] = 'Please Enter Correct Format!';
    }
  }
  if (values.contact_no?.length > 0) {
    if (values.contact_no?.length !== 10) {
      errors['contact_no'] = 'Please Enter 10 digit mobile number!';
    }
  }
  return errors;
};
function CustomForm(props) {
  const {
    UserDetailsForm,
    updateemp,
    Employee,
    handleClose,
    pristine,
    submitting,
    invalid,
  } = props;
  const [Fields, setFields] = useState([
    {
      key: 'name',
      name: 'name',
    },
    {
      key: 'age',
      name: 'age',
      type: 'number',
    },
    {
      key: 'gender',
      name: 'gender',
      type: 'select',
      values: ['Male', 'Female', 'other'],
    },
    {
      key: 'email',
      name: 'email',
    },

    {
      key: 'contact_no',
      name: 'contact no',
      type: 'number',
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
      type: 'autocomplete',
      values: ['United States'],
    },
    {
      key: 'State',
      name: 'State',
      type: 'autocomplete',
      // values: StatesCity.map((rep) => rep.name),
    },
    {
      key: 'City',
      name: 'City',
      type: 'autocomplete',
      // values: getcity(UserDetailsForm.State),
    },
    {
      key: 'Pincode',
      name: 'Pincode',
      type: 'number',
    },
  ]);
  const getcity = (stateName) => {
    if (stateName) {
      const StateSelected = StatesCity.filter(
        (res) => res.name === stateName
      )[0];
      const finalNames = StateSelected.cities;
      return finalNames;
    }
  };
  useEffect(() => {
    setFields([
      {
        key: 'name',
        name: 'name',
      },
      {
        key: 'age',
        name: 'age',
        type: 'number',
      },
      {
        key: 'gender',
        name: 'gender',
        type: 'select',
        values: ['Male', 'Female', 'other'],
      },
      {
        key: 'email',
        name: 'email',
      },

      {
        key: 'contact_no',
        name: 'contact no',
        type: 'number',
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
        type: 'autocomplete',
        values: ['United States'],
      },
      {
        key: 'State',
        name: 'State',
        type: 'autocomplete',
        values: StatesCity.map((rep) => rep.name),
      },
      {
        key: 'City',
        name: 'City',
        type: 'autocomplete',
        values: UserDetailsForm?.State ? getcity(UserDetailsForm?.State) : [],
      },
      {
        key: 'Pincode',
        name: 'Pincode',
        type: 'number',
      },
    ]);
  }, [UserDetailsForm?.State]);

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
      <GridItem md={12} style={{ textAlign: 'center' }}>
        <h1>
          {Object.entries(Employee?.SelectedEmp)?.length > 0 ? 'Edit ' : 'Add '}
          Employee
        </h1>
      </GridItem>
      {Fields.map((rep) => (
        <GridItem md={6}>
          {rep.type === 'select' ? (
            <Field
              style={{ margin: '10px 0px' }}
              fullWidth={true}
              name={rep.name}
              component={renderSelectField}
              values={rep.values || []}
              label={rep.name}
            />
          ) : rep.type === 'autocomplete' ? (
            <Field
              style={{ margin: '10px 0px' }}
              fullWidth={true}
              name={rep.key}
              label={rep.name}
              component={renderAutoCompleteField}
              options={rep.values || []}
            />
          ) : (
            <Field
              style={{ margin: '10px 0px' }}
              id={rep.key}
              fullWidth={true}
              name={rep.key}
              label={rep.name}
              type={rep.type}
              component={renderTextField}
            />
          )}
        </GridItem>
      ))}
      <GridItem md={12}>
        <Button
          variant='contained'
          disabled={pristine || submitting || invalid}
          onClick={handleSubmit}
          color='primary'
        >
          {Object.entries(Employee?.SelectedEmp)?.length > 0
            ? 'Update'
            : ' Submit'}
        </Button>
        <Button
          color='warning'
          style={{ margin: '0px 10px' }}
          variant='contained'
          disabled={pristine || submitting}
          onClick={() => props.reset()}
        >
          clear
        </Button>
      </GridItem>
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
    validate,
    enableReinitialize: true,
    forceUnregisterOnUnmount: true,
    destroyOnUnmount: false,
  })(CustomForm)
);
