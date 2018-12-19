import React from 'react';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      start_date: null,
      end_date: null,
      num_guests: null,
      focusedInput: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createBooking({start_date: this.state.start_date, end_date: this.state.end_date})
  }


  render(){
    const{home} = this.props
    return(
      <div className="booking-form-container">
        <form className="booking-form" onSubmit={this.handleSubmit}>
          
          <h2>${home.price}</h2>
          
          <hr/>
          
          <div className="booking-form-dates">
            <h5>Dates</h5>
          </div>
          
          <DateRangePicker
          startDate={this.state.start_date} // momentPropTypes.momentObj or null,
          startDateId="start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.end_date} // momentPropTypes.momentObj or null,
          endDateId="end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ start_date: startDate, end_date: endDate })}
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          startDatePlaceholderText="Start"
          endDatePlaceholderText="End"
          />

          <div className="booking-form-guests">
            <h5>Guests</h5>
          </div>
          <div className="booking-form-guest-input">
            <input className="booking-form-input" type="text"/>
          </div>
          <div className="booking-form-book">
            <input id="booking-button"className="booking-form-input" type="submit" value="Book"/>
          </div>
          <div>
            <h6>You won't be charged yet</h6>
          </div>
          <hr/>
          
        </form>
      </div>
    )
  }
}

export default BookingForm;