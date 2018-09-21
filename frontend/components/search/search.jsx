import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      previousText: '',
      clicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleOuterClick = this.handleOuterClick.bind(this);
    this.isNoteHeaderContent = this.isNoteHeaderContent.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    if (!this.state.clicked) {
      this.setState({clicked: !this.state.clicked});
      this.props.updateFilter('label_id', -1);
    }
    document.addEventListener('mousedown', this.handleOuterClick);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.updateFilter('text', this.state.text);
    }
  }

  handleChange(e) {
      const prevState = merge({}, this.state.text);
      this.setState({previousText: prevState});
      this.setState({text: e.currentTarget.value});
      this.props.updateFilter('text', this.state.text);
  }

  handleSearchClick(e) {
    this.props.updateFilter('text', this.state.text);
  }

  isNoteHeaderContent(element) {
    return element.className === 'noteHeaderContent';
  }

  isClassUserInfo(element) {
    return element.className === 'searchAreaClicked' || element.className === 'searchArea';
  }

  handleOuterClick(e) {
    if (e.path[0].className === 'magnifyingGlassIcon') {
      this.handleSearchClick(e);
    } else if (e.path.some(this.isClassUserInfo)) {
      this.handleClick();
    } else if (e.path.some(this.isNoteHeaderContent)) {
      document.removeEventListener('mousedown', this.handleOuterClick);
      document.removeEventListener('keydown', this.handleKeyDown);
      this.setState({text: '', previousText: ''});
      this.props.updateFilter('text',this.state.text);
      this.setState({clicked:false});
    }
  }

  render() {
    return (
      <div
        className={this.state.clicked ? 'searchAreaClicked' : 'searchArea'}
        onClick={(e) => this.handleClick(e)}>
        <img
          className="magnifyingGlassIcon"
          src={window.magnifyingGlassUrl}></img>
        <input
          onClick={(e) => this.handleClick(e)}
          type='text'
          className='searchInputArea'
          value={this.state.text}
          placeholder='Search'
          onChange={(e) => this.handleChange(e)}>
        </input>
      </div>
    )
  }
}

export default Search;
