// import Logo from '../../../app/assets/images/';
import React from 'react';
import {Link} from 'react-router-dom'
import LoginFormContainer from '../session_form/login_form_container'
import SignupFormContainer from '../session_form/signup_form_container'

const Greeting = ({currentUser, logout, openModal}) => {

  const sessionbuttons = () => (
    <div className="greeting greeting-links">
      <div className="logo">
        <Link to="/"><img id="logo" src="http://pluspng.com/img-png/airbnb-logo-png--880.png" alt="Airbnb Logo PNG"/></Link>
      </div>
      {/* <Link id="signup-link" to="/signup">Sign Up</Link> */}
      <button id="signup-link" onClick={() => openModal('Sign Up')}>Sign Up</button>
      <br />
      {/* <Link id="login-link" to="/login">Log In</Link> */}
      <button id="login-link" onClick={() => openModal('Login')}>Log In</button>
    </div>
  )

  const greetingHeading = () => (
    <div className="greeting greeting-welcome">
      <div className="logo">
        <Link to="/"><img id="logo" src="http://pluspng.com/img-png/airbnb-logo-png--880.png" alt="Airbnb Logo PNG"/></Link>
      </div>
      <div className="welcome-message-logged-in">
        <h2 id="welcome-message">Welcome {currentUser.fname}</h2>
        <button id="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
  )
    // debugger
  // return currentUser ? greetingHeading() : sessionbuttons();

  const headingOptions = currentUser ? greetingHeading() : sessionbuttons();

  return(
    <div>
      
      {headingOptions}
    </div>
  )
}


export default Greeting;