import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const HomeIndexItem = ({home}) => (
  <li>
    <div className="home-thumbnail">
      <Link to={`homes/${home.id}`}>
      <div className="photo-thumbnail">
        {/* <h1>Photo of Home</h1> */}
        <img src={home.photoUrls[0]} alt="home"/>
      </div>
      <div className="home-thumbnail-points">
        <div className="home-thumbnail-type-beds">
          <h5>{home.home_type.toUpperCase()} &#8226; {home.bed_count} BEDS</h5>
        </div>
        <div className="home-thumbnail-description">
          <h3>{home.title}</h3>
        </div>
        <div className="home-thumbnail-price">
          <h5>${home.price} per night &#8226; Free cancellation</h5>
        </div>
        <div className="home-thumbnail-rating">
          <h5>Rating</h5>
        </div>
      </div>
      </Link>
    </div>
  </li>
)

export default HomeIndexItem;