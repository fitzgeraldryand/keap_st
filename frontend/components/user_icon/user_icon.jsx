import React from 'react';

class UserIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      color: ""
    };
    this.randomUserColor = this.randomUserColor.bind(this);
    this.toggleClicked = this.toggleClicked.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClickIcon = this.handleClickIcon.bind(this);
    this.handleOuterClick = this.handleOuterClick.bind(this);
  }

  toggleClicked() {
    this.setState({clicked: !this.state.clicked});
  }

  isClassUserInfo(element) {
    return element.className === 'userInfoContainer';
  }

  handleLogout(e) {
    e.stopPropagation();
    this.props.logout();
  }

  handleClickIcon(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.state.clicked) {
      document.addEventListener('mouseup', this.handleOuterClick);
    } else if (this.state.clicked) {
      document.removeEventListener('mouseup', this.handleOuterClick);
    }
    this.toggleClicked();
  }

  handleOuterClick(e) {
    if (this.state.clicked && (e.path[0].className === 'dot-active')) {
      return "";
    }
    else if (this.state.clicked && (e.path[0].className === 'logoutButton')) {
      this.handleLogout(e);
    }
    else if (this.state.clicked && (e.path[0].className !== 'logoutButton') && e.path.some(this.isClassUserInfo)) {
      e.stopPropagation();
    } else {
      this.toggleClicked();
      document.removeEventListener('mouseup', this.handleOuterClick);
    }
  }

  randomUserColor() {
    const startArr = ['#6B5B95', '#7F4145', '#3F69AA', '#BE9EC9', '#006E6D', '#485167', '#E94B3C'];
    return startArr[Math.floor(Math.random() * startArr.length)];
  }

  componentWillMount() {
    this.setState({color: this.randomUserColor()});
  }

  render() {
    const colorStyle = {backgroundColor: this.state.color};
    const userIconDropdown = (
      <div className="userIconDropdown">
        <div className='userInfoWrapper'>
          <div className="userInfoContainer">
            <div className="userIconImage">
              <div className='dotLarge' style={colorStyle}>
                {this.props.currentEmail.slice(0,1).toUpperCase()}
              </div>
            </div>
            <div className='userInfo'>
              {this.props.currentEmail}
            </div>
          </div>
          <div className='userLogout' onClick={(e) => this.handleLogout(e)}>
            <button className='logoutButton' onClick={(e) => this.handleLogout(e)}>Sign out</button>
          </div>
        </div>
      </div>
    );
    const dot = (
      <span
        style={colorStyle}
        onClick={(e) => this.handleClickIcon(e)}>
        {this.props.currentEmail.slice(0,1).toUpperCase()}
      </span>
    );
    return (
      <div>
        <span
          className = {this.state.clicked ? 'dot-active' : 'dot'}
          style={colorStyle}
          onClick={(e) => this.handleClickIcon(e)}>
          {this.props.currentEmail.slice(0,1).toUpperCase()}
        </span>
        {this.state.clicked ? userIconDropdown : ""}
      </div>
    )
  }
}

export default UserIcon;
