import React from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
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

  handleSubmit(e) {
    e.preventDefault();
    if (Boolean(this.state.password === this.state.confirmPassword)) {
      const user = Object.assign({}, {email: this.state.email}, {password: this.state.password});
      this.props.processForm(user);
      this.props.history.push('/');
    } else {
      this.props.receiveErrors(['Passwords do not match']);
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
          <div className="signup-form-container">
            <div className='signupInput'>
              <img className="logo" src={window.logoUrl}></img>
              <form className='login-form-box' onSubmit={this.handleSubmit}>
                <div className='signup-copy'>
                  <p className='header'> Create your Smeagol Account </p>
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
                  <p className='infoCopy'>You can use letters, numbers & periods</p>
                  <div className='passwordDiv'>
                    <div>
                      <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" onChange={this.update('password')} name="password" autoComplete="password" autoFocus />
                      </FormControl>
                    </div>
                    <div>
                      <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
                        <Input id="confirmPassword" type="password" onChange={this.update('confirmPassword')} name="confirmPassword" autoComplete="password" autoFocus />
                      </FormControl>
                    </div>
                  </div>
                  <p className='errors'>{this.renderErrors()}</p>
                  <p className='infoCopy'>Use 6 or more characters with a mix of letters, numbers & symbols</p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='bottom-buttons'>
                  <div className='loginLinkDiv'>
                    <Link to="/login1" onClick={this.clearErrors} className='loginLink'>Sign in instead</Link>
                  </div>
                  <input className="login1-submit" type="submit" value="Next"/>
                </div>
              </form>
            </div>
            <div className='signupImageContainer'>
              <img className="signupImage" src={window.userUrl}></img>
              <p> One account. All of Smeagol working for you. </p>
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

export default withRouter(SignUpForm);
