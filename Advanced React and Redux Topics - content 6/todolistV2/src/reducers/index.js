import { combineReducers } from 'redux';
import TypesReducer from './reducer_types';
import StatusReducer from './reducer_status';
import TodosReducer from './reducer_todos';
import TodoSelectedReducer from './reducer_todoSelected';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  types : TypesReducer,
  status : StatusReducer,
  todos : TodosReducer,
  currentTodo : TodoSelectedReducer,
  form : formReducer
});

export default rootReducer;
