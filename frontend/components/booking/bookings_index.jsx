import React from 'react'
import BookingIndexItem from './booking_index_item';

class BookingsIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchBookings()

    // this.props.fetchHomes()
  }

  render(){
    let bookingItems = this.props.bookings.map( booking => {
      // console.log(this.props)
      return(
        <BookingIndexItem
        booking={booking}
        home={this.props.homes[booking.home_id]}
        key={booking.id} 
        deleteBooking={this.props.deleteBooking}
        history={this.props.history}
        // fetchHome={this.props.fetchHome} 
        />
      )
    })
    return(
      <div>
        <div className="Bookings-header">
          <h2>Your Trips</h2>
        </div>
        <div className="bookings-index-item-container">
          <ul>
            {bookingItems}
          </ul>
        </div>
      </div>
    )
  }
}

export default BookingsIndex