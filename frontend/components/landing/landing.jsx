import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container.jsx';
import UserIcon from '../user_icon/user_icon.jsx';
import NoteIndex from '../notes/note_index.jsx';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  // randomUserColor() {
  //   const startArr = ['#6B5B95', '#7F4145', '#3F69AA', '#BE9EC9', '#006E6D', '#485167', '#E94B3C'];
  //   return startArr[Math.floor(Math.random() * startArr.length)];
  // }

componentDidMount() {
  const main = document.getElementById('content-main');
  main.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
  const main = document.getElementById('content-main');
  main.removeEventListener('scroll', this.handleScroll);
}

handleScroll(e) {
  if (e.path[0].scrollTop >= 1 && (!this.state.scrolled)) {
    this.setState({scrolled: true});
  }

  if (e.path[0].scrollTop === 0) {
    this.setState({scrolled: false});
  }
}

  render() {
    // const colorStyle = {backgroundColor: this.randomUserColor()};
    return (
      <div className='wrapper'>
        <div className={this.state.scrolled ? "header-nav-with-shadow" : "header-nav"}>
          <div className="header-logo">
            <Link to="/" id='homeLink'>
              <img className="logo" src={window.blackLogoUrl}></img>
            </Link>
            <br/>
            <Link to="/" id='homeLink'>
              Keep
            </Link>
          </div>
          <ul className="header-list">
            <li></li>
            <li></li>
            <li>
              <UserIcon currentEmail={this.props.currentEmail} logout={this.props.logout}/>
            </li>
          </ul>
        </div>
        <div className='sidebarContainer'>
          <section className="content-sidebar" id='sidebarContainer'>
            <ul>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
            </ul>
          </section>
        </div>
        <section className="content-main" id='content-main'>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
          </ul>
        </section>
      </div>
    );
  }
};

export default Landing;
