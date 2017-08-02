import {FETCH_TODO} from '../actions';

export default function(state = 'hello', action){
  switch(action.type){
    case FETCH_TODO:
    return action.payload.data;
    default:
      return state;
  }
}
