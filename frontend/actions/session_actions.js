import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

export const signup = (user) => dispatch => (
  SessionApiUtil.signup(user)
  .then( user => dispatch(recieveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.responseJSON)))
)

export const login = (user) => dispatch => (
  SessionApiUtil.login(user)
  .then( user => dispatch(recieveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.responseJSON)))
)

export const logout = () => dispatch => (
  SessionApiUtil.logout()
  .then( user => dispatch(logoutCurrentUser(user)), err => dispatch(receiveSessionErrors(err.responseJSON)))
)

export const recieveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user: {user}
})

export const logoutCurrentUser = (user) => ({
  type: LOGOUT_CURRENT_USER,
  user: {user}
})

export const receiveSessionErrors = (err) => ({
  type: RECEIVE_SESSION_ERRORS,
  err
})