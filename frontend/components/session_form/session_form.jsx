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

              <input type="text" value={this.state.fname} onChange={this.handleUpdate('fname')} placeholder="First Name"/>


              <input type="text" value={this.state.lname} onChange={this.handleUpdate('lname')} placeholder="Last Name"/>

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

            <input type="text" value={this.state.email} onChange={this.handleUpdate('email')} placeholder="Email"/>

            <input type="password" value={this.state.password} onChange={this.handleUpdate('password')} placeholder="Password"/>
          <div>
            {names()}
            {renderErrors()}
          </div>
          <input id="session-form-button"type="submit" value={this.props.formType}/>
          <p></p>
        </form>
      </div>
    )
  }
}

export default SessionForm;