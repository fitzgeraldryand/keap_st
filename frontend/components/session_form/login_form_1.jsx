import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm2 from './login_form_2.jsx';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

class LoginForm1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      clicked: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({clicked: true});
  }

  renderErrors() {
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

  render() {
    if (!this.state.clicked) {
      return (
        <div className="login-form-container">
          <form className="login-form-box" onSubmit={this.handleSubmit}>
            <br/>
            {this.props.formTypeHTML}
            <br/>
            <h3>with your Google account</h3>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>
              <br/>
              <input className="login1-submit" type="submit" value="Next"/>
              <br/>
              {this.props.navLink}
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <LoginForm2 email={this.state.email} processForm={this.props.processForm}/>
      )
    }
  }
}

export default withRouter(LoginForm1);
