import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import homesReducer from './homes_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  homes: homesReducer
});

export default entitiesReducer;