import React from 'react';
import SessionForm from './session_form';

import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
  return ({
    formType: "Login",
    user: {email: '', password: ''},
    errors: state.errors.session
  })
}

const mapdispatchToProps = dispatch => {

  return ({
    action: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: (formtype) => dispatch(openModal(formtype))
  }) 
}

export default connect(mapStateToProps, mapdispatchToProps)(SessionForm);