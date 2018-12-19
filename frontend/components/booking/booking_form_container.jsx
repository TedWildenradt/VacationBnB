import BookingForm from './booking_form';
import {connect} from 'react-redux';
import {createBooking} from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = ({session, entities: {users}, entities: {homes}}, ownProps) => {
  const home_id = ownProps.home.id
  return ({
    currentUser: users[session.id],
    home_id: home_id
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    createBooking: (booking) => dispatch(createBooking(booking)),

    openModal: (formtype) => dispatch(openModal(formtype))
  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(BookingForm);