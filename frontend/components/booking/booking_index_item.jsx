import React from 'react';

class BookingIndexitem extends React.Component{
  constructor(props){
    super(props)
    this.deleteBooking = this.deleteBooking.bind(this)
  }

  // componentDidMount(){
  //   this.props.fetchHome(this.props.booking.home_id)
  // }
  deleteBooking(){
    // debugger
    this.props.deleteBooking(this.props.booking.id)
    .then( window.location.reload(), (err) => console.log(err))
  }

  render(){
    const{booking, home} = this.props;
    // debugger
    if (home === undefined) {
      return null
    }
    // debugger
    return(
      <li>
        <div className="booking-thumbnail">
          <div className="booking-thumbnail-photo">
            <img src={home.photoUrls[0]} />
          </div>
          <div className="booking-content">
            <div className="booking-title">
              {/* <h3>{home.title}</h3> */}
            </div>
            <div className="booking-dates">
              <h3>Check in: {booking.start_date}</h3>
              <h3>Check out: {booking.end_date}</h3>
            </div>
            <div className="booking-price">
              {/* <h3>{home.price} per night</h3> */}
            </div>
            <div className="delete-booking">
              <button onClick={this.deleteBooking}>Delete</button>
            </div>
            <h1>{booking.id}</h1>
            <h1>{home.id}</h1>
          </div>
        </div>
      </li>
    )
  }
}

export default BookingIndexitem;