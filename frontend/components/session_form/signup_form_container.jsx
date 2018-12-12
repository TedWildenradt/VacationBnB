import React from 'react';
import SessionForm from './session_form';

import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    formType: "Sign Up"
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    signup: (user) => dispatch(signup(user))
  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(SessionForm);