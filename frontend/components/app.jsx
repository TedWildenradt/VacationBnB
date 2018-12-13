import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container';
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container';
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util'
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <GreetingContainer />

  </div>
);

export default App;