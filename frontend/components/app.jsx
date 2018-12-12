import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container';
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container';

const App = () => (
  <div>
    <h1>VacationBnB</h1>
    <GreetingContainer />
    <LoginFormContainer />

  </div>
);

export default App;