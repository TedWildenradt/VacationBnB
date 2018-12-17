import React from 'react';
// import Slider from 'react-rangeslider';
import { updateFilters } from '../../actions/filters_action';
import {Range} from 'rc-slider';
// import 'rc-slider/assets/index.css'
// import '../../../../app/assets/stylesheets/components/rc-slider.css';
// import 'rc-slider/assets/index.css';

class PriceFilter extends React.Component{
  constructor(props){
    super(props)
    // this.state = {
    //   // showMenu: false,
    //   price: props.price
    // }
    this.state = {
      minPrice: this.props.minPrice,
      maxPrice: this.props.maxPrice
    }
    debugger
    this.updatePrice = this.updatePrice.bind(this)
    this.handleApply = this.handleApply.bind(this)
    
    // this.showMenu = this.showMenu.bind(this)
    // this.closeMenu = this.closeMenu.bind(this)
  }
  updatePrice(e) {
    this.setState({
      minPrice: e[0],
      maxPrice: e[1]
    })
  }

  handleApply(price) {
    debugger
    updateFilters('price', price)
  }

  render(){
    const{minPrice, maxPrice} = this.state;

    return(
      <div>
        <p>{minPrice}</p>
        <Range
        min={1}
        max={600}
        value={[minPrice, maxPrice]}
        defaultValue={[minPrice, maxPrice]}
        onChange={this.updatePrice}
        />
        <p>{maxPrice}</p>
        <button onClick={() => this.handleApply([minPrice, maxPrice])}>Apply Filter</button>
      </div>

    )
  }



  // showMenu(e) {
  //   e.preventDefault()
  //   this.setState({showMenu: true}, () => {
  //     document.addEventListener('click', this.closeMenu)
  //   })
  // }

  // closeMenu() {
  //   this.setState({ showMenu: false }, () => {
  //     document.removeEventListener('click', this.closeMenu);
  //   });
  // }

  // handleUpdate(field){
  //   if (field === "priceMax"){
  //     return e => this.setState({
  //       [price[1]]: e.target.value
  //     })
  //   } else {
  //     return e => this.setState({
  //       [price[0]]: e.target.value
  //     })
  //   }
  // }

  // handleSubmit(e){
  //   e.preventDefault();
  //   this.props.updateFilter(this.state.price)
  // }



  // render(){
  //   // const{price} = this.props
  //   return(
  //     <div>
  //       <button onClick={this.showMenu}>
  //         Price
  //       </button>
  //       {
  //         this.state.showMenu ? (
  //           <div className="price-menu">
  //             <form onSubmit={this.handleSubmit}>
  //               <input type="number" value={this.state.min} onChange={this.handleUpdate('priceMax')}/>
  //               <input type="number" value={this.state.max} onChange={this.handleUpdate('priceMax')}/>
  //             </form>
  //           </div>
  //         )
  //         : (
  //           null
  //         )
  //       }
  //     </div>
  //   )
  // }
}

// const handleChange = (filter, updateFilters) => e => (
//   updateFilters(filter, parseInt(e.currentTarget.value))
// );

// const PriceFilter = ({minPrice, maxPrice, updateFilters}) => (
//   <div>
//     <h2>Search Filters</h2>
//     <br/>
//     <label>Minimum Price</label>
//     <input
//       type="text"
//       value={minPrice}
//       onChange={handleChange('minPrice', updateFilters)}
//     />
//     <br/>
//     <label>Maximum Price</label>
//     <input
//       type="text"
//       value={maxPrice}
//       onChange={handleChange('maxPrice', updateFilters)}
//     />
//   </div>
// )


export default PriceFilter;