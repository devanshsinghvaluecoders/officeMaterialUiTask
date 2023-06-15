import { UPDATE_EMP, RESET_EMP } from './actionTypes.js';

export const updateemp = (field, value) => ({
  type: UPDATE_EMP,
  field,
  value,
});

export const resetemp = () => ({
  type: RESET_EMP,
});
