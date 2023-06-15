import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import EMPreducer from './EMPreducer';
const rootReducer = combineReducers({
  Employee: EMPreducer,

  form: formReducer,
});

export default rootReducer;
