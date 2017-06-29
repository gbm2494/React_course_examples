import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';
import SelectedReducer from './reducer_currentlySelected';

const rootReducer = combineReducers({
  news : NewsReducer,
  currentlySelected : SelectedReducer
});

export default rootReducer;
