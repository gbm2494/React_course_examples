import { combineReducers } from 'redux';
import TypesReducer from './reducer_types';
import StatusReducer from './reducer_status';
import TodosReducer from './reducer_todos';
import TotalTasksReducer from './reducer_total_tasks';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  types : TypesReducer,
  status : StatusReducer,
  todos : TodosReducer,
  totalTasks : TotalTasksReducer,
  form : formReducer
});

export default rootReducer;
