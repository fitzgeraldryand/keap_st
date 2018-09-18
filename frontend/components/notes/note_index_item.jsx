import React from 'react';
import { Link } from 'react-router-dom';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDelete() {
    this.props.deleteNote(this.props.note.id);
  }

  handleDotClick(e) {
    this.props.updateNote({
      id: this.props.note.id,
      color: e.currentTarget.style.backgroundColor
    });
  }

  handleClick() {
    const noteId = this.props.note.id;
    this.props.addHiddenNote(noteId);
  }

  render() {
    const visibilityStyle = (this.props.note.id === this.props.hiddenNote ? {visibility:'hidden'} : {visibility:'visible'});

    const colorStyle = {backgroundColor: this.props.note.color};

    const checkmark = (
      <img className="tick" src={window.tickUrl}></img>
    );


    if (this.props.note.body.length >= 30) {
      var body = <p style={{fontSize: '14px', lineHeight: '24px'}}>{this.props.note.body}</p>;
    } else if (this.props.note.body.length >= 20) {
      var body = <p style={{fontSize: '24px', lineHeight: '28px'}}>{this.props.note.body}</p>;
    } else if (this.props.note.body.length >= 10) {
      var body = <p style={{fontSize: '28px', lineHeight: '36px'}}>{this.props.note.body}</p>;
    } else if (this.props.note.body.length >= 15) {
      var body = <p style={{fontSize: '36px', lineHeight: '48px'}}>{this.props.note.body}</p>;
    } else {
      var body = <p style={{fontSize: '48px', lineHeight: '60px'}}>{this.props.note.body}</p>;
    };

    const colorPaletteModal = (
      <div className = "colorPaletteDropdownWrapper">
        <div className="colorPaletteDropdown">
          <div className='colorDot' style={{backgroundColor: 'rgb(207, 216, 220)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(207, 216, 220)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(215, 204, 200)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(215, 204, 200)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(248, 187, 208)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(248, 187, 208)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(179, 136, 255)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(179, 136, 255)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(130, 177, 255)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(130, 177, 255)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(128, 216, 255)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(128, 216, 255)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(167, 254, 235)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(167, 254, 235)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(204, 253, 144)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(204, 253, 144)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(255, 253, 141)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(255, 253, 141)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(255, 209, 128)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(255, 209, 128)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(254, 138, 128)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(254, 138, 128)' ? checkmark : ""}
          </div>
          <div className='colorDot' id='colorDotWhite' style={{backgroundColor: 'rgb(250, 250, 250)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.props.note.color === 'rgb(250, 250, 250)' ? checkmark : ""}
          </div>
        </div>
      </div>
    );
    return (
      <li
        className="note-index-item-wrapper"
        id={`index-item-${this.props.note.tab_index}`}
        style={visibilityStyle}
        onClick={() => this.handleClick()}>
        <div style={colorStyle} className='note-index-item'>
          <Link to={`/notes/${this.props.note.id}`}>
            <div style={colorStyle} className={this.props.note.title === "" ? 'note-index-item-title-nil' : 'note-index-item-title'}>
              <p>{this.props.note.title}</p>
            </div>
            <div style={colorStyle} className={'note-index-item-content'}>
              {body}
            </div>
          </Link>
          <div style={colorStyle} className='note-index-item-footer-container'>
            <div style={colorStyle} className='note-index-item-footer'>
              <input type='image' className="noteIcon" src={window.addUserButtonUrl}></input>
              <span className="noteIcon" id='colorPaletteIcon'>
                {colorPaletteModal}
              </span>
              <input type='image' className="noteIcon" src={window.frameLandscapeUrl}></input>
              <input type='image' className="noteIcon" src={window.tagUrl}></input>
              <input type='image' className="noteIcon" src={window.garbageUrl} onClick={this.handleDelete}></input>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default NoteIndexItem;
