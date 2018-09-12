import React from 'react';
import { withRouter } from 'react-router-dom';
import * as SessionAPIUtil from '../../util/session_api_util.js';
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

  componentDidMount () {
    this.props.getUsers();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (Boolean(this.props.users[this.state.email])) {
      this.setState({clicked: true});
    } else {
      this.props.receiveErrors(['Invalid email']);
    }
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
        <div className="login-div">
          <div className="login-form-container">
            <form className="login-form-box" onSubmit={this.handleSubmit}>
              <img className="logo" src='../../assets/google_logo.png'></img>
              <br/>
              <h1>Sign In</h1>
              <br/>
              <p>with your Google account</p>
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
        </div>
      );
    } else {
      return (
        <LoginForm2 email={this.state.email} processForm={this.props.processForm} errors={this.props.errors}/>
      )
    }
  }
}

export default withRouter(LoginForm1);
