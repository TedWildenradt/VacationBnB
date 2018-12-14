import React from 'react';
import { Link } from 'react-router-dom';

class HomeShow extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.home
  }

  componentDidMount() {
    this.props.fetchHome(this.props.match.params.id)
  }

  render () {
    return (
      <div>
        <div className="show-photos-container">
          <img src={this.state.photoUrl} alt="home"/>
        </div>
        <div className="show-content-container">
          <div className="show-content-information">
            <div className="show-home-title">
              <p>Home Title</p>
            </div>
            <div className="show-home-city">
              <p>{this.state.city}</p>
            <div className="show-home-beds-baths">
              <p>List of beds/baths</p>
              <hr/>
            </div>
            </div>
            <div className="show-home-description">
              <p>Description of Home</p>
              <hr/>
            </div>
            <div className="show-home-amenities">
              <p>Amenities</p>
              <hr/>
            </div>
            <div className="show-booking-calendar">
              <p>Where the Booking component goes</p>
              <hr/>
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