import { RESET_EMP, UPDATE_EMP } from '../action/actionTypes';

const Reducer = (
  state = {
    Count: 0,
    Employee: [],
    SelectedEmp: {},
  },
  action
) => {
  switch (action.type) {
    case UPDATE_EMP:
      return {
        ...state,
        [action.field]: action.value,
      };

    case RESET_EMP:
      return {
        Count: 0,
        Employee: [],
        SelectedEmp: {},
      };

    default:
      return state;
  }
};

export default Reducer;
