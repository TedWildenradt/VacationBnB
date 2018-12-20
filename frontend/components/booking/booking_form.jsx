import React from 'react';
import { DateRangePicker } from 'react-dates';
import {push} from 'react-router-dom'

class BookingForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      start_date: null,
      end_date: null,
      num_guests: null,
      focusedInput: null,
      home_id: this.props.home_id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    // debugger
    e.preventDefault();

    if (!this.props.currentUser){
      this.props.openModal('Login')
    } else {
      debugger
      this.props.createBooking({
        start_date: this.state.start_date._d, 
        end_date: this.state.end_date._d,
        home_id: this.state.home_id
      }).then(() => this.props.history.push('/bookings'), (err) => console.log(err))
    }

  }


  render(){
    const{home} = this.props
    return(
      <div className="booking-form-container">
        <form className="booking-form" onSubmit={this.handleSubmit}>
          <div className="booking-form-price">
            <h2>${home.price} <span id="per-night">per night</span></h2>
          </div>
          <hr/>
          
          <div className="booking-form-dates">
            <h5>Dates</h5>
          </div>
          <div className="date-range-picker">
          <DateRangePicker
          startDate={this.state.start_date} // momentPropTypes.momentObj or null,
          startDateId="start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.end_date} // momentPropTypes.momentObj or null,
          endDateId="end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ start_date: startDate, end_date: endDate })}
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          startDatePlaceholderText="Check in"
          endDatePlaceholderText="Check out"
          numberOfMonths={1}
          />
          </div>
          <div className="booking-form-guests">
            <h5>Guests</h5>
          </div>
          <div className="booking-form-guest-input">
            <input id="guests-button" className="booking-form-input" type="text" placeholder={`${home.num_guests} guests`}/>
          </div>
          <div className="booking-form-book">
            <input id="booking-button"className="booking-form-input" type="submit" value="Book"/>
          </div>
          <div id="no-charge">
            <h6>You won't be charged yet</h6>
          </div>
          <hr/>
          
        </form>
      </div>
    )
  }
}

export default BookingForm;