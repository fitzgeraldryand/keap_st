import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

class LoginForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
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
    const user = merge({email: this.props.email}, this.state);
    this.props.processForm(user);
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
                <p className='header'> Welcome </p>
                <div className='userDisplay'>
                  <img className="accountIconUrl" src={window.accountIconUrl}></img>
                  <br/>
                  <p>{this.props.email}</p>
                </div>
              </div>
              <br/>
              <br/>
              <div className="login-form">
                <br/>
                <FormControl margin="normal" fullWidth>
                  <InputLabel htmlFor="password">Enter your password</InputLabel>
                  <Input id="password" name="password" onChange={this.update('password')} autoComplete="password" autoFocus />
                </FormControl>
                <p className='errors'>{this.renderErrors()}</p>
              </div>
              <br/>
              <br/>
              <div className='bottom-buttons'>
                <span className='loginLink'>Forgot passowrd?</span>
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

export default withRouter(LoginForm2);
