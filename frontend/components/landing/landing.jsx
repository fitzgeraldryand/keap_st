import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container.jsx';
import UserIcon from '../user_icon/user_icon.jsx';
import NoteIndex from '../notes/note_index.jsx';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  // randomUserColor() {
  //   const startArr = ['#6B5B95', '#7F4145', '#3F69AA', '#BE9EC9', '#006E6D', '#485167', '#E94B3C'];
  //   return startArr[Math.floor(Math.random() * startArr.length)];
  // }

  render() {
    // const colorStyle = {backgroundColor: this.randomUserColor()};
    return (
      <div className='wrapper'>
        <div className="header-nav">
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
          <section className="content-sidebar">
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
        <section className="content-main">

        </section>
      </div>
    );
  }
};

export default Landing;
