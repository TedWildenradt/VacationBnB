import Booking from './booking';
import {connect} from 'react-redux';


const mapStateToProps = ({session, entities: {users}}) => {
  return ({
    currentUser: users[session.id]
  })
}

const mapdispatchToProps = dispatch => {

  return ({

  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(Greeting);