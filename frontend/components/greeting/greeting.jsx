
import React from 'react';
import {Link} from 'react-router-dom'
import Lifecycle from 'react-pure-lifecycle';


const componentDidUpdate = ({location}) => {
  if(location.pathname === '/'){
    document.getElementsByClassName("greeting")[0].style.color = "white";
    document.getElementsByClassName("sticky")[0].style.borderBottom = "1px solid transparent"
    document.getElementsByClassName("sticky")[0].style.backgroundColor = "transparent"
  } else {
    document.getElementsByClassName("greeting")[0].style.color = "rgb(72, 72, 72)";
    document.getElementsByClassName("sticky")[0].style.borderBottom = "1px solid lightgrey"
    document.getElementsByClassName("sticky")[0].style.backgroundColor = "white"
  }
  
};
const componentDidMount = ({location}) => {
  if(location.pathname === '/'){
    document.getElementsByClassName("greeting")[0].style.color = "white";
    document.getElementsByClassName("sticky")[0].style.borderBottom = "1px solid transparent"
    document.getElementsByClassName("sticky")[0].style.backgroundColor = "transparent"
  } 
  
};


const methods = {
  componentDidUpdate,
  componentDidMount
};

const Greeting = ({currentUser, logout, openModal, location}) => {


  if(location.pathname === '/'){
    document.body.style.backgroundImage = "url(https://s3-us-west-1.amazonaws.com/vacationbnb-dev/airbnb_backsplash.jpg)";

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


  const headingOptions = currentUser ? greetingHeading() : sessionbuttons();

  return(
    <div className="sticky">
      
      {headingOptions}
    </div>
  )
}



export default Lifecycle(methods)(Greeting)