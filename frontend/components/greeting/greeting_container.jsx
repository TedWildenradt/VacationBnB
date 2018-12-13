import Greeting from './greeting';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom'

const mapStateToProps = ({session, entities: {users}}) => {
  return ({
    currentUser: users[session.id]
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  }) 
}

export default withRouter(connect(mapStateToProps, mapdispatchToProps)(Greeting));