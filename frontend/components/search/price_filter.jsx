import React from 'react';

class PriceFilter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this)
  }

  showMenu(e) {
    e.preventDefault()
    this.setState({showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu(e){
    this.setState({showMenu: false}, () => {
      document.removeEventListener('click', this.closeMenu)
    })
  }


  render(){
    
    return(
      <div>
        <button>
          Price
        </button>
        {
          this.state.showMenu ? (
            <div className="price-menu">

            </div>
          )
          : (
            null
          )
        }
      </div>
    )
  }
}

export default PriceFilter;