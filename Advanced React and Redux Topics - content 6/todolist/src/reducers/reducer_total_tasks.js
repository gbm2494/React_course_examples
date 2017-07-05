import {FETCH_TOTAL_TASKS} from '../actions';
import _ from 'lodash';

export default function(state = '0', action){
  switch(action.type){
    case FETCH_TOTAL_TASKS:
    return action.payload.data[0].total;
  }

  return state;
}
