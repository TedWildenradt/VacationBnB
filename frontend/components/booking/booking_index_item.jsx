import React from 'react';

class BookingIndexitem extends React.Component{
  constructor(props){
    super(props)
    this.deleteBooking = this.deleteBooking.bind(this)
  }


  deleteBooking(){
    this.props.deleteBooking(this.props.booking.id)
    .then( window.location.reload(), (err) => console.log(err))
  }

  render(){
    
    const{booking, home} = this.props;
    
    if (home === undefined) {
      return null
    }

    return(
      <li>
        <div className="booking-thumbnail">
          <div className="booking-thumbnail-photo">
            <img src={home.photoUrls[0]} />
          </div>
          <div className="booking-content">
            <div className="booking-title">
              <h3>{home.title}</h3>
            </div>
            <div className="booking-dates">
              <div className="check-in">
                <h3>Check in: {booking.start_date.slice(0,10)}</h3>
              </div>
              <div className="check-out">
                <h3>Check out: {booking.end_date.slice(0,10)}</h3>
              </div>
            </div>
            <div className="booking-price">
              <h3>${home.price} per night</h3>
              
            </div>
            <div className="line-break">
              <hr/>
            </div>
            <div className="delete-booking">
              <button id="delete-booking-button" onClick={this.deleteBooking}>Delete</button>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default BookingIndexitem;