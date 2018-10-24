import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container.jsx';
import UserIcon from '../user_icon/user_icon.jsx';
import NoteIndex from '../notes/note_index.jsx';
import NoteIndexContainer from '../notes/note_index_container.jsx';
import NoteFormContainer from '../notes/note_form_container.jsx';
import LabelIndexContainer from '../labels/labels_index_container.jsx';
import SearchContainer from '../search/search_container.jsx';


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
  if (window.location.hash.includes('?label_id=')) {
    // this.props.fetchNotes();
    this.props.updateFilter('label_id', window.location.hash.slice(12));
  } else {
    this.props.fetchNotes();
  }
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

handleRemoveFilter() {
  this.props.updateFilter('label_id',-1);
  this.props.history.push('/');
}

  render() {
    // const colorStyle = {backgroundColor: this.randomUserColor()};
    const headerArea = (
      <div className="header-logo">
        <Link to="/" id='homeLink'>
          <img className="logo" src={window.blackLogoUrl} onClick={() => this.handleRemoveFilter()}></img>
        </Link>
        <br/>
        <Link to="/" id='homeLink' onClick={() => this.handleRemoveFilter()}>
          KeapSt
        </Link>
      </div>
    );

    // <div className='searchArea'>
    //   {searchArea}
    // </div>

    return (
      <div className='wrapper'>
        <div className={this.state.scrolled ? "header-nav-with-shadow" : "header-nav"}>
          <div className='headerAndSearch'>
            {headerArea}
            <SearchContainer/>
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
          <div className='content-sidebar'>
            <div className='noteHeaderContent'
              onClick={() => this.handleRemoveFilter()}>
              <img className="noteHeaderIcon" src={window.lightbulb2Url}></img>
              <p className='noteHeaderCopy'>Notes</p>
            </div>
            <LabelIndexContainer/>
          </div>
      </div>
        <section className="content-main" id='content-main'>
          <NoteFormContainer/>
          <NoteIndexContainer/>
        </section>
      </div>
    );
  }
};

export default Landing;
