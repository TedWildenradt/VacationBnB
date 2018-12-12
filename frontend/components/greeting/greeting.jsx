
import React from 'react';
import {Link} from 'react-router-dom'

const Greeting = ({currentUser, logout}) => {

  const sessionbuttons = () => (
    <div className="greeting greeting-links">
      <Link id="login-link" to="/login">Login</Link>
      <br />
      <Link id="signup-link" to="/signup">Sign Up</Link>
    </div>
  )

  const greetingHeading = () => (
    <div className="greeting greeting-welcome">
      <h2>Welcome {currentUser.fname}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  )
    // debugger
  return currentUser ? greetingHeading() : sessionbuttons();
}


export default Greeting;