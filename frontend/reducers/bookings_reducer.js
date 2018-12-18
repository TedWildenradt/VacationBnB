import merge from 'lodash/merge';
import {RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING} from '../actions/booking_actions';

const BookingsReducer = (state={}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings
    case RECEIVE_BOOKING:
      let newBooking = {[action.booking.id]: action.booking}
      return merge({}, state, newBooking);
    case REMOVE_BOOKING:
      let newState = merge({}, state);
      delete newState[action.bookingId]
      return newState;
    default:
      return state;
  }
}

export default BookingsReducer;