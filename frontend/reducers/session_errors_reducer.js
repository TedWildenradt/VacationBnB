import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions';
import {merge} from 'lodash';
import { OPEN_MODAL } from '../actions/modal_actions';

const sessionErrorsReducer = (state=[], action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case OPEN_MODAL:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors
    default:
      return state;
  }
}

export default sessionErrorsReducer;