import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container';
import LoginFormContainer from '../components/session_form/login_form_container'
import SignupFormContainer from '../components/session_form/signup_form_container';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <h1>VacationBnB</h1>
    <GreetingContainer />
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;