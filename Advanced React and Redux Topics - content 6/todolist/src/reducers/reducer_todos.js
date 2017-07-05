import {FETCH_TODOS, CREATE_TODO} from '../actions';
import _ from 'lodash';

export default function(state = [], action){
  switch(action.type){
    case FETCH_TODOS:
    return action.payload.data;
    case CREATE_TODO:
      const todo = action.payload.data;
      const newState = {...state};
      newState[newState.length] = todo;
      return newState;
    default:
      return state;
  }
}
