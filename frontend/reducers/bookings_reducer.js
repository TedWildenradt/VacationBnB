import merge from 'lodash/merge';
import {RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING} from '../actions/booking_actions';

const BookingsReducer = (state={}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
    
    case RECEIVE_BOOKING:
    
    case REMOVE_BOOKING:

    default:
      return state;
  }
}