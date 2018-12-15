import React from 'react';
import HomeIndexItem from './home_index_item.jsx';


class HomeIndex extends React.Component{
  componentDidMount(){
    this.props.fetchHomes();
  }

  
  render() {
    let homeItems = this.props.homes.map( home => {
      return(
        <HomeIndexItem
        home={home}
        key={home.id}
  
        />
      )
    })
    return(
      <div className="homes-listing-container no-background">
        <div className="home-index-items-container">
          <h3>Where to Stay</h3>
          <ul>
            {homeItems}
          </ul>
        </div>
      </div>
    )
    
  }
}

export default HomeIndex;