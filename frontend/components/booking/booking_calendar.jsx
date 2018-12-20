import React from 'react'
import { DayPickerRangeController } from 'react-dates';


class BookingCalendar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    }
  }

  render(){

    return(
      <div>
        <DayPickerRangeController
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        numberOfMonths={2}
        />
      </div>
    )
  }
}

export default BookingCalendar;