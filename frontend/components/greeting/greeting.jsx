// import Logo from '../../../app/assets/images/';
import React from 'react';
import {Link} from 'react-router-dom'

const Greeting = ({currentUser, logout}) => {

  const sessionbuttons = () => (
    <div className="greeting greeting-links">
      <div className="logo">
        <Link to="/"><img id="logo" src="http://pluspng.com/img-png/airbnb-logo-png--880.png" alt="Airbnb Logo PNG"/></Link>
      </div>
      <Link id="login-link" to="/login">Login</Link>
      <br />
      <Link id="signup-link" to="/signup">Sign Up</Link>
    </div>
  )

  const greetingHeading = () => (
    <div className="greeting greeting-welcome">
      <div className="logo">
        <Link to="/"><img id="logo" src="http://pluspng.com/img-png/airbnb-logo-png--880.png" alt="Airbnb Logo PNG"/></Link>
      </div>
      <h2>Welcome {currentUser.fname}</h2>
      <button onClick={logout}>Logout</button>
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