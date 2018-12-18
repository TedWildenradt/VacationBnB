import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import homesReducer from './homes_reducer';
import BookingsReducer from './bookings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  homes: homesReducer,
  bookings: BookingsReducer
});

export default entitiesReducer;