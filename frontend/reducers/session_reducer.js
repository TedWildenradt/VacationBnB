import {RECIEVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'

const _nullSession = {
  id: null
}

const sessionReducer = (state=_nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_CURRENT_USER:
      return {id: action.user.id}
    case LOGOUT_CURRENT_USER:
      return _nullSession
    default:
      return state;
  }
}

export default sessionReducer;