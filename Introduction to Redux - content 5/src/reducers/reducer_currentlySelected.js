import {CHANGE_NEWS} from '../actions/index';

export default function(state = null, action){
  switch(action.type){
    case CHANGE_NEWS :
      return action.payload;
  }
  return state;
}
