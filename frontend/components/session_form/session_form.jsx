import React from 'react';
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.user 

    this.handleSubmit = this.handleSubmit.bind(this)
    this.demoUser = this.demoUser.bind(this);
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

  demoUser(e){
    e.preventDefault()
    this.props.action({
      email: "number1spy@m16.com",
      password: "password"
    });
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

    const alternate = () => {
      if (this.props.formType === 'Sign Up'){
        return(
          <div className="alternate">
            <p>Already have an account? <Link to="/login">Log In</Link></p>
          </div>
        )
      } else {
        return(
          <div className="alternate">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
        )
      }
    }

    const demoLogin = () => {
      if (this.props.formType !== 'Sign Up') {
        return(
          <div className="demo-login">
            <button onClick={this.demoUser}>Demo Login</button>

          </div>
        )
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
          {demoLogin()}
          {alternate()}
        </form>
      </div>
    )
  }
}

export default SessionForm;