import React from 'react';
import SessionForm from './session_form';

import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
  return ({
    formType: "Sign Up",
    user: {email: '', password: '', fname: '', lname: ''},
    errors: state.errors.session
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    action: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(SessionForm);