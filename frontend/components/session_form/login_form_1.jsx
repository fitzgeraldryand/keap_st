import React from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
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
    this.clearErrors = this.clearErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  clearErrors () {
    this.props.receiveNoErrors();
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
            <img className="logo" src={window.logoUrl}></img>
            <form className="login-form-box" onSubmit={this.handleSubmit}>
              <div className='login-copy'>
                <p className='header'> Sign in </p>
                <p>with your Google Account</p>
              </div>
              <br/>
              <br/>
              <div className="login-form">
                <br/>
                <FormControl margin="normal" fullWidth>
                  <InputLabel htmlFor="email">Email or phone</InputLabel>
                  <Input id="email" onChange={this.update('email')} name="email" autoComplete="email" autoFocus />
                </FormControl>
                <p className='errors'>{this.renderErrors()}</p>
              </div>
              <br/>
              <br/>
              <div className='guestMode'>
                <span>Not your computer? Use Guest mode to sign in privately.</span>
                <span className='guestModeSpan'>Guest mode</span>
              </div>
              <br/>
              <br/>
              <div className='bottom-buttons'>
                <div className='loginLinkDiv'>
                  <Link to="/signup" onClick={this.clearErrors} className='loginLink'>Create account</Link>
                </div>
                <input className="login1-submit" type="submit" value="Next"/>
              </div>
            </form>
          </div>
          <div className='bottomNav'>
            <div>
              <p>English (United States)</p>
            </div>
            <div className='bottomNavOptions'>
              <a href='https://support.google.com/accounts?hl=en#topic=3382296'>Help</a>
              <a href='https://policies.google.com/privacy?gl=US&hl=en'>Privacy</a>
              <a href='https://policies.google.com/terms?gl=US&hl=en'>Terms</a>
            </div>
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
