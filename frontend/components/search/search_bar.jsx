import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    state = {
      query: '',
    }
  }
 
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
 
  render() {
    return (
      <form>
        <input
          placeholder="Try 'Los Angeles'.."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }

}

export default SearchBar;