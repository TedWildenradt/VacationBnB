import React from 'react';
import { Link } from 'react-router-dom';

class HomeShow extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.home
    // debugger
  }

  componentDidMount() {
    this.props.fetchHome(this.props.match.params.id)
  }

  render () {
    // debugger
    return (
      <div>

        <div className="show-photos-container">
          {/* <img src={this.props.home.photoUrls[0]} alt="home"/> */}
          <ul className="photo-grid">
            <li className="photo-1"><img src={this.props.home.photoUrls[0]} alt="home"/></li>
            <li className="photo-2"><img src={this.props.home.photoUrls[1]} alt="home"/></li>
            <li className="photo-3"><img src={this.props.home.photoUrls[2]} alt="home"/></li>
            <li className="photo-4"><img src={this.props.home.photoUrls[3]} alt="home"/></li>
            <li className="photo-5"><img src={this.props.home.photoUrls[4]} alt="home"/></li>
          </ul>
        </div>
        
        <div className="show-content-container">
          <div className="show-content-information">
            <div className="show-home-type">
              <h3>{this.props.home.home_type}</h3>
            </div>
            <div className="show-home-title">
              <h1>{this.props.home.title}</h1>
            </div>
            <div className="show-home-city">
              <p>{this.props.home.city}</p>
            <div className="show-home-beds-baths">
              <ul>
                <li><i className="fas fa-male"></i> {this.props.home.num_guests} Guests</li>
                <li><i className="fas fa-home"> {this.props.home.bedrooms} Bedroom</i></li>
                <li><i className="fas fa-bed"></i> {this.props.home.bed_count} Beds</li>
                <li><i className="fas fa-shower"></i> {this.props.home.bathrooms} Bathrooms</li>
              </ul>
              <hr/>
            </div>
            </div>
            <div className="show-home-description">
              <p>{this.props.home.description}</p>
              {/* <hr/> */}
            </div>
            <div className="show-home-amenities">
              <hr/>
              <h4>Amenities</h4>
                <ul>
                  <li><i className="fas fa-wifi"></i>  Wifi</li>
                  <li><i className="fas fa-utensils"></i>  Kitchen</li>
                  <li><i className="fas fa-tv"></i>  TV</li>
                  <li><i className="fas fa-align-center"></i>  Essentials</li>
                  <li><i className="fas fa-laptop"></i>  Laptop Friendly Workspace</li>
                  <li></li>
                </ul>
              <hr/>
            </div>
            <div className="show-booking-calendar">
              <p>Where the Booking component goes</p>
              
            </div>
            <div className="show-reviews-container">
              <p>Where the Reviews Component Goes</p>
            </div>

          </div>
          <div className="show-booking-info">

          </div>
        </div>
      </div>
    );
  }
}

export default HomeShow;