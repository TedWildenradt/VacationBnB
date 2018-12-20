import BookingsIndex from './bookings_index';
import {connect} from 'react-redux';
import {fetchBookings, deleteBooking} from '../../actions/booking_actions';
import {fetchHome} from '../../actions/home_actions';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state) => {
  // let homes = Object.values(state.entities.bookings).map(booking => state.entities.homes[booking.home_id])
  // debugger
  return ({
    bookings: Object.values(state.entities.bookings),
    homes: state.entities.homes
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    fetchBookings: () => dispatch(fetchBookings()),
    // fetchHome: (id) => dispatch(fetchHome(id))
    fetchHomes: () => dispatch(fetchHomes()),
    deleteBooking: (id) => dispatch(deleteBooking(id))
  }) 
}

export default withRouter(connect(mapStateToProps, mapdispatchToProps)(BookingsIndex));