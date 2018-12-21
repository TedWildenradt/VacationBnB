import React from 'react';

class NavBarSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      query: this.props.query
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  handleInputChange () {
    return e => this.setState({
      query: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.updateFilters('query', this.state.query)
    .then(() => this.props.history.push('/homes'), (err) => console.log(err))
  }
 
  render() {
    const cityOption = () => {
      const cities = ['Los Angeles', 'San Francisco', 'New York'];
      let num = Math.floor(Math.random() * 3);
      return cities[num];
    }
    // if (this.props.query === undefined) {
    //   return null
    // }
    return (
      <div id="navbar-search-container">
        <form id="navbar-search-form" onSubmit={this.handleSubmit}>
          {/* <i class="fas fa-search"></i> */}
            <input id="navbar-search-input"
              placeholder={`Try "${cityOption()}"`}
              onChange={this.handleInputChange()}
              value={this.state.query}
            />
        </form>
      </div>
    )
  }

}

export default NavBarSearch;