import {RECEIVE_ALL_HOMES, RECEIVE_HOME} from '../actions/home_actions';

const homesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_HOMES:
      return action.homes
    case RECEIVE_HOME:
      return Object.assign({}, state, {[action.home.id]: action.home})
    default:
      return state;
  }
}

export default homesReducer