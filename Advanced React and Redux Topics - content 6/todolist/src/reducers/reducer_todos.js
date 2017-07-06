import {FETCH_TODOS} from '../actions';
import _ from 'lodash';

export default function(state = [], action){
  switch(action.type){
    case FETCH_TODOS:
    return action.payload.data;
    default:
      return state;
  }
}
