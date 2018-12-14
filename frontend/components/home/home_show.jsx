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
          <img src={this.props.home.photoUrl} alt="home"/>

        </div>
        <div className="show-content-container">
          <div className="show-content-information">
            <div className="show-home-type">
              <h3>{this.props.home.home_type}</h3>
            </div>
            <div className="show-home-title">
              <p>{this.props.home.title}</p>
            </div>
            <div className="show-home-city">
              <p>{this.props.home.city}</p>
            <div className="show-home-beds-baths">
              <ul>
                <li>{this.props.home.num_guests}<i className="fas fa-male"></i> Guests</li>
                <li>{this.props.home.bedrooms}<i className="fas fa-home"> Bedroom</i></li>
                <li>{this.props.home.bed_count}<i className="fas fa-bed"></i> Beds</li>
                <li>{this.props.home.bathrooms}<i className="fas fa-shower"></i> Bathrooms</li>
              </ul>
              <hr/>
            </div>
            </div>
            <div className="show-home-description">
              <p>{this.props.home.description}</p>
              {/* <hr/> */}
            </div>
            <div className="show-home-amenities">
              <p>Amenities</p>
                <ul>
                  <li><i class="fas fa-wifi"></i>Wifi</li>
                  <li><i class="fas fa-utensils"></i>Kitchen</li>
                  <li><i class="fas fa-tv"></i>TV</li>
                  <li><i class="fas fa-align-center"></i>Essentials</li>
                  <li><i class="fas fa-laptop"></i>Laptop Friendly Workspace</li>
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