import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      address: ''
    }
  }
 
  handleInputChange () {
    return e => this.setState({
      query: e.target.value
    })
  }
 
  render() {
    const cityOption = () => {
      const cities = ['Los Angeles', 'San Francisco', 'New York'];
      let num = Math.floor(Math.random() * 3);
      return cities[num];
    }
    return (
      <form id="search-form">
        {/* <i class="fas fa-search"></i> */}
        <label><h1>Book Unique Homes and Experiences</h1>
          <input
            placeholder={`Try "${cityOption()}"`}
            onChange={this.handleInputChange()}
          />
        </label>
      </form>
    )
  }

}

export default SearchBar;