import React from 'react';
import {Range} from 'rc-slider';


class PriceFilter extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      minPrice: this.props.minPrice,
      maxPrice: this.props.maxPrice
    }

    this.updatePrice = this.updatePrice.bind(this)
    this.handleApply = this.handleApply.bind(this)

  }
  updatePrice(e) {
    this.setState({
      minPrice: e[0],
      maxPrice: e[1]
    })

  }

  componentDidUpdate(prevProps) {
      if (this.props.maxPrice !== prevProps.maxPrice || this.props.minPrice !== prevProps.minPrice){
        this.setState({
          minPrice: this.props.minPrice,
          maxPrice: this.props.maxPrice
        })
      }
  }


  handleApply(price) {

    this.props.updateFilters('price', price)
  }

  render(){
    const{minPrice, maxPrice} = this.state;

    return(
      <div className="price-filter-slider">  
        <div>
          <h2>Price Filter</h2>
        </div >
        <div className="range-slider">
        <Range
        min={1}
        max={600}
        value={[minPrice, maxPrice]}
        defaultValue={[minPrice, maxPrice]}
        onChange={this.updatePrice}
        onAfterChange={() => this.handleApply([minPrice, maxPrice])}
        allowCross={false}
        />
        </div>
        <div className="price-filter-bounds">
          <div>
            <p>${minPrice}</p>
          </div>
          <div>
            <p>${maxPrice}</p>            
          </div>
        </div>
      </div>

    )
  }
}


export default PriceFilter;