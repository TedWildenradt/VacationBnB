// import Logo from '../../../app/assets/images/';
import React from 'react';
import {Link} from 'react-router-dom'
import Lifecycle from 'react-pure-lifecycle';
// import LoginFormContainer from '../session_form/login_form_container'
// import SignupFormContainer from '../session_form/signup_form_container'

const componentDidUpdate = ({location}) => {
  if(location.pathname === '/'){
    document.getElementsByClassName("greeting")[0].style.color = "white";
    // document.getElementsByClassName("greeting-links")[0].style.borderBottom = "none"
  } else {
    document.getElementsByClassName("greeting")[0].style.color = "rgb(72, 72, 72)";
    // document.getElementsByClassName("greeting-links")[0].style.borderBottom = "1px solid lightgrey"
  }
  
};
const componentDidMount = ({location}) => {
  if(location.pathname === '/'){
    document.getElementsByClassName("greeting")[0].style.color = "white";
    // document.getElementsByClassName("greeting-links")[0].style.borderBottom = "none"
  } 
  
};


const methods = {
  componentDidUpdate,
  componentDidMount
};

const Greeting = ({currentUser, logout, openModal, location}) => {
  // console.log(location)

  if(location.pathname === '/'){
    document.body.style.backgroundImage = "url(https://s3-us-west-1.amazonaws.com/vacationbnb-dev/airbnb_backsplash.jpg)";
    // document.getElementsByClassName("greeting")[0].style.color = "grey"
  } else {
    document.body.style.backgroundImage = "none";
  }


  const sessionbuttons = () => (
    <div className="greeting greeting-links">
      <div className="logo">
        <Link to="/homes"><img id="logo" src="http://pluspng.com/img-png/airbnb-logo-png--880.png" alt="Airbnb Logo PNG"/></Link>
      </div>
      <ul className="logged-out">
        <li><button><Link className="color-change" to="/homes" id="explore" >Explore Available Homes</Link></button></li>
        <li><button className="color-change" id="signup-link" onClick={() => openModal('Sign Up')}>Sign Up</button></li>  
        <li><button className="color-change" id="login-link" onClick={() => openModal('Login')}>Log In</button></li>
      </ul>
    </div>
  )

  const greetingHeading = () => (
    <div className="greeting greeting-welcome">
      <div className="logo">
        <Link to="/homes"><img id="logo" src="http://pluspng.com/img-png/airbnb-logo-png--880.png" alt="Airbnb Logo PNG"/></Link>
      </div>
      <ul className="welcome-message-logged-in">
        <li><button className="color-change"><Link to="/homes" id="explore" >Explore Available Homes</Link></button></li>
        <li><button className="color-change" id="logout-button" onClick={logout}>Logout</button></li>
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


// export default Greeting;
export default Lifecycle(methods)(Greeting)