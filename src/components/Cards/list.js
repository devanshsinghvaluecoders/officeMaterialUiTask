import React from 'react';
import { connect } from 'react-redux';
import { resetemp, updateemp } from '../../redux/action/EMPAction';

function List(props) {
  return (
    <div>
      {props.Employee.Count}
      {props.Employee.Employee?.map((rep) => (
        <div
          onClick={() => props.handleEdit(rep)}
          style={{ padding: '30px', cursor: 'pointer' }}
        >
          {rep.id}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  Employee: state.Employee,
});

const mapDispatchToProps = {
  updateemp: updateemp,
  resetemp: resetemp,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
