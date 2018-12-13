// import Logo from '../../../app/assets/images/';
import React from 'react';
import {Link} from 'react-router-dom'
import LoginFormContainer from '../session_form/login_form_container'
import SignupFormContainer from '../session_form/signup_form_container'

const Greeting = ({currentUser, logout, openModal, location}) => {
  console.log(location)

  if(location.pathname === '/'){
    document.body.style.backgroundImage = "url(https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
  } else {
    document.body.style.backgroundImage = "none";
  }

  const sessionbuttons = () => (
    <div className="greeting greeting-links">
      <div className="logo">
        <Link to="/"><img id="logo" src="http://pluspng.com/img-png/airbnb-logo-png--880.png" alt="Airbnb Logo PNG"/></Link>
      </div>
      <ul className="logged-out">
        <li><button id="explore" >Explore Available Homes</button></li>
        <li><button id="signup-link" onClick={() => openModal('Sign Up')}>Sign Up</button></li>  
        <li><button id="login-link" onClick={() => openModal('Login')}>Log In</button></li>
      </ul>
    </div>
  )

  const greetingHeading = () => (
    <div className="greeting greeting-welcome">
      <div className="logo">
        <Link to="/"><img id="logo" src="http://pluspng.com/img-png/airbnb-logo-png--880.png" alt="Airbnb Logo PNG"/></Link>
      </div>
      <ul className="welcome-message-logged-in">
        <li><button id="explore" >Explore Available Homes</button></li>
        <li><button id="logout-button" onClick={logout}>Logout</button></li>
      </ul>
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