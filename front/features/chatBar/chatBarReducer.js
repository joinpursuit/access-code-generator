import {UPDATE_CHATBAR} from './chatBarActions'

const INTIAL_STATE = {
  input: "",
};

export default function(state = INTIAL_STATE, action) {
  switch(action.type){
    case UPDATE_CHATBAR:
      let key = Object.keys(action)[1]
      return Object.assign({}, state, {[key]: action[key]});
      return Object.assign({}, state, )
    default: 
      return state
  }
}