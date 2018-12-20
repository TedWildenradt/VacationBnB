import React from 'react';
import {Range} from 'rc-slider';


class GuestFilter extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      minGuest: this.props.minGuest,
      maxGuest: this.props.maxGuest
    }

    this.updateGuest = this.updateGuest.bind(this)
    this.handleApply = this.handleApply.bind(this)

  }
  updateGuest(e) {
    this.setState({
      minGuest: e[0],
      maxGuest: e[1]
    })

  }

  handleApply(num_guests) {

    this.props.updateFilters('num_guests', num_guests)
  }

  render(){
    const{minGuest, maxGuest} = this.state;

    return(
      <div className="price-filter-slider">  
        <div>
          <h2>Guests Filter</h2>
        </div >
        <div className="range-slider">
        <Range
        min={1}
        max={12}
        value={[minGuest, maxGuest]}
        defaultValue={[minGuest, maxGuest]}
        onChange={this.updateGuest}
        onAfterChange={() => this.handleApply([minGuest, maxGuest])}
        allowCross={false}
        />
        </div>
        <div className="price-filter-bounds">
          <div>
            <p>{minGuest}</p>
          </div>
          <div>
            <p>{maxGuest}</p>            
          </div>
        </div>
      </div>

    )
  }
}


export default GuestFilter;