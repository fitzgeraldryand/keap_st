import React from 'react'

class UserIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      color: ""
    };
    this.toggleClicked = this.toggleClicked.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleClicked() {
    this.setState({clicked: !this.state.clicked});
  }

  isClassUserInfo(element) {
    return element.className === 'userInfoContainer';
  }

  handleClick(e) {
    if (e.path[0].className === 'logoutButton') {
      this.props.logout();
    }

    if (e.path.some(this.isClassUserInfo) || e.path[0].className === 'userLogout') {
      return '';
    }

    if (this.state.clicked || e.path[0].className === 'dot') {
      this.toggleClicked();
    }
  }

  randomUserColor() {
    const startArr = ['#6B5B95', '#7F4145', '#3F69AA', '#BE9EC9', '#006E6D', '#485167', '#E94B3C'];
    return startArr[Math.floor(Math.random() * startArr.length)];
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
    this.setState({color: this.randomUserColor()});
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
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
          <div className='userLogout'>
            <button className='logoutButton'>Sign out</button>
          </div>
        </div>
      </div>
    );
    const dot = (
      <span
        style={colorStyle}
        onClick={(e) => this.handleClick(e)}>
        {this.props.currentEmail.slice(0,1).toUpperCase()}
      </span>
    );
    return (
      <div>
        <span
          className = {this.state.clicked ? 'dot-active' : 'dot'}
          style={colorStyle}
          onClick={(e) => this.handleClick(e)}>
          {this.props.currentEmail.slice(0,1).toUpperCase()}
        </span>
        {this.state.clicked ? userIconDropdown : ""}
      </div>
    )
  }
}

export default UserIcon;
