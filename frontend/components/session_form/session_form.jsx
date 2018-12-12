import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.user 

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
  }

  handleUpdate(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }


  render() {
    const names = () => {
      if (this.props.formType === 'Sign Up'){
        return(
          <div>
            <label> First Name:
              <input type="text" value={this.state.fname} onChange={this.handleUpdate('fname')}/>
            </label>
            <label> Last Name:
              <input type="text" value={this.state.lname} onChange={this.handleUpdate('lname')}/>
            </label>
          </div>
        )
      } else {
        return(
          <p></p>
        )
      }
    }

    const renderErrors = () => {
      if (this.props.errors.length > 0){
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }
    }
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Email:
            <input type="text" value={this.state.email} onChange={this.handleUpdate('email')}/>
          </label>
          <label> Password:
            <input type="password" value={this.state.password} onChange={this.handleUpdate('password')}/>
          </label>
          <div>
            {names()}
            {renderErrors()}
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default SessionForm;