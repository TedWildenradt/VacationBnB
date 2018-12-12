import Greeting from './greeting';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';

const mapStateToProps = ({session, entities: {users}}) => {
  return ({
    currentUser: users[session.id]
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    logout: () => dispatch(logout())
  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(Greeting);