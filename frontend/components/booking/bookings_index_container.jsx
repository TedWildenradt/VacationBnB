import BookingsIndex from './bookings_index';
import {connect} from 'react-redux';
import {fetchBookings} from '../../actions/booking_actions';


const mapStateToProps = (state) => {

  return ({
    bookings: Object.values(state.entities.bookings) || {}
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    fetchBookings: () => dispatch(fetchBookings()),
  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(BookingsIndex);