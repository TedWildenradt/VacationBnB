
import React from 'react';
import {Link} from 'react-router-dom'
import Lifecycle from 'react-pure-lifecycle';
import SearchBarContainer from '../search/search_bar_container';


const componentDidUpdate = ({location}) => {
  
  if(location.pathname === '/'){
    document.getElementsByClassName("greeting")[0].style.color = "white";
    document.getElementsByClassName("sticky")[0].style.borderBottom = "1px solid transparent"
    document.getElementsByClassName("sticky")[0].style.backgroundColor = "transparent"
    var divs = document.querySelectorAll('.greeting');
    for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add('white');
    }
  } else {
    document.getElementsByClassName("greeting")[0].style.color = "rgb(72, 72, 72)";
    document.getElementsByClassName("sticky")[0].style.borderBottom = "1px solid lightgrey"
    document.getElementsByClassName("sticky")[0].style.backgroundColor = "white"
    var divs = document.querySelectorAll('.white');
    for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove('white');
    }
  }
  
};
const componentDidMount = ({location}) => {
  if(location.pathname === '/'){
    document.getElementsByClassName("greeting")[0].style.color = "white";
    document.getElementsByClassName("sticky")[0].style.borderBottom = "1px solid transparent"
    document.getElementsByClassName("sticky")[0].style.backgroundColor = "transparent"
    var divs = document.querySelectorAll('.greeting');
    for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add('white');
    }
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
        <li><button className="color-change"><Link to="/bookings" id="trips-button" >Trips</Link></button></li>
        <li><button className="color-change" id="logout-button" onClick={logout}>Logout</button></li>
      </ul>
    </div>
  )

  const bigSearchBar = () => (
    <div className="big-search-container">
      <div className="big-search-bar">
        <SearchBarContainer />
      </div>
    </div>
  )

  const centerSearch = location.pathname === '/' ? bigSearchBar() : <div></div>;


  const headingOptions = currentUser ? greetingHeading() : sessionbuttons();

  return(
    <div>
      <div className="sticky">    
        {headingOptions}
      </div>
      <div>
        {centerSearch}
      </div>
    </div>
  )
}



export default Lifecycle(methods)(Greeting)