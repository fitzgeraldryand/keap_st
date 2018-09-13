import React from 'react';
import { Link } from 'react-router-dom';
import DashboardContainer from '../dashboard/dashboard_container.jsx';
import LoginFormContainer from '../session_form/login_form_container.jsx';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  randomUserColor() {
    const startArr = ['#6B5B95', '#7F4145', '#3F69AA', '#BE9EC9', '#006E6D', '#485167', '#E94B3C'];
    return startArr[Math.floor(Math.random() * startArr.length)];
  }

  render() {
    const colorStyle = {backgroundColor: this.randomUserColor()};
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
              <span className='dot' style={colorStyle}>
                {this.props.currentEmail.slice(0,1).toUpperCase()}
              </span>
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
          </ul>
        </section>
      </div>
    );
  }
};

export default Landing;
