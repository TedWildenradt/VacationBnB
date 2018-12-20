import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

export const fetchBookings = () => dispatch => (
  BookingApiUtil.fetchBookings()
  .then(bookings => dispatch(receiveBookings(bookings)))
)

export const fetchBooking = (id) => dispatch => (
  BookingApiUtil.fetchBooking(id)
  .then(booking => dispatch(receiveBooking(booking)))
)

export const createBooking = (booking) => dispatch => {
  // debugger
  return(
  BookingApiUtil.createBooking(booking)
  .then(booking => dispatch(receiveBooking(booking)))
  )
}

export const updateBooking = (booking) => dispatch => (
  BookingApiUtil.updateBooking(booking)
  .then(bookings => dispatch(receiveBookings(bookings)))
)

export const deleteBooking = (id) => dispatch => (
  BookingApiUtil.deleteBooking(id)
  .then(booking => dispatch(removeBookings(booking.id)))
)

export const receiveBookings = (payload) => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings: payload.bookings,
  homes: payload.homes
})

export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking
})

export const removeBookings = (bookingId) => ({
  type: REMOVE_BOOKING,
  bookingId
})