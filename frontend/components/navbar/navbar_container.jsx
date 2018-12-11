import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';


const mapStatetoProps = ({session, entities: {users}}) => {

  return({
    currentUser: users[session.id]
  })
}

const mapDispatchtoProps = dispatch => {

  return({
    logout: () => dispatch(logout())
  })
}

export default connect(mapStatetoProps, mapDispatchtoProps)(NavBar);