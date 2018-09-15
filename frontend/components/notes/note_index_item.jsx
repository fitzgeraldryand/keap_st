import React from 'react';
import { Link } from 'react-router-dom';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);
  }

  componentDidMount() {
    const indexItem = document.getElementById(`index-item-${this.props.note.tab_index}`);
    indexItem.addEventListener('mouseover', this.handleMouseover);
    indexItem.addEventListener('mouseout', this.handleMouseout);
  }

  componentWillUnmount() {
    const indexItem = document.getElementById(`index-item-${this.props.note.tab_index}`);
    indexItem.removeEventListener('mouseover', this.handleMouseover);
    indexItem.removeEventListener('mouseout', this.handleMouseout);
  }

  handleMouseover(){
    this.setState({hovered: true});
  }

  handleMouseout(){
    this.setState({hovered: false});
  }

  render() {
    const colorStyle = {backgroundColor: this.props.note.color};
    return (
      <li className="note-index-item-wrapper" id={`index-item-${this.props.note.tab_index}`}>
        <div style={colorStyle} className={this.state.hovered ? 'note-index-item-hovered' : 'note-index-item'}>
          <div style={colorStyle} className={this.state.hovered ? 'note-index-item-title-hovered' : 'note-index-item-title'}>
            <p>{this.props.note.title.toUpperCase()}</p>
          </div>
          <div style={colorStyle} className={this.state.hovered ? 'note-index-item-content-hovered' : 'note-index-item-content'}>
            <p>{this.props.note.body}</p>
          </div>
          <div style={colorStyle} className={'note-index-item-footer-container'}>
            <div style={colorStyle} className={this.state.hovered ? 'note-index-item-footer-hovered' : 'note-index-item-footer'}>
              <img className="noteIcon" src={window.addUserButtonUrl}></img>
              <img className="noteIcon" src={window.painterPaletteUrl}></img>
              <img className="noteIcon" src={window.frameLandscapeUrl}></img>
              <img className="noteIcon" src={window.menuUrl}></img>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default NoteIndexItem;
