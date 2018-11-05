import React from 'react';
import { Link } from 'react-router-dom';

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labellingState: {}
    };
    this.handleDotClick = this.handleDotClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handlePin = this.handlePin.bind(this);
  }

  handleDelete() {
    this.props.deleteNote(this.props.note.id);
  }

  componentWillReceiveProps(newProps) {
    const labellingState = {};
    newProps.labels.forEach((label) => {
      labellingState[label.id] = false;
    });
    newProps.note.label_ids.forEach((label_id) => {
      labellingState[label_id] = true;
    });
    this.setState({labellingState: labellingState});
  }
  // componentDidMount() {
  //   this.props.fetchNotes();
  // }

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

  componentDidMount() {
    this.props.getLabels();
  }

  handleCheck(e) {
    if (this.state.labellingState[parseInt(e.currentTarget.id)]) {
      this.props.deleteLabelling({
        note_id: this.props.note.id,
        label_id: parseInt(e.currentTarget.id)
      });
    } else {
      this.props.createLabelling({
        note_id: this.props.note.id,
        label_id: parseInt(e.currentTarget.id)
      });
    }
  }

  handlePin(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.updateNote({
      id: this.props.note.id,
      pinned: !!!this.props.note.pinned
    });
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

    const pinSource = (
      (this.props.note.pinned === true) ? window.pinBlue : window.pinGray
    );

    const pin = (
      <div
        onClick={(e) => this.handlePin(e)}
        className='pin'
        style={{backgroundColor: this.props.note.color}}>
        <img
          className="pinImage"
          src={pinSource}>
        </img>
      </div>
    );

    const labelSelectorModalLi = (
      this.props.labels.map((label) => {
        return (
          <li
            key={label.id}
            className='labelSelectorModalLi'>
            <div
              id={label.id}
              className='insideLi'
              onClick={(e) => this.handleCheck(e)}>
              <div
                className={this.state.labellingState[label.id] ? 'clickedDiv' : 'unclickedDiv'}
                id ={label.id}>
              </div>
              <p className='insideLiP'>{label.name}</p>
            </div>
          </li>
        )
      })
    )

    const labelSelectorModal = (
      <div className='labelSelectorModalWrapper'>
        <div className='labelSelectorModal'>
          <div className='labelSelectorHeader'>Label note</div>
          <ul className='labelSelector'>
            {labelSelectorModalLi}
          </ul>
        </div>
      </div>
    );

    const noteIndexItemLabelLi = (
      this.props.note.label_ids.map((label_id) => {
        if (Boolean(this.props.labelsObj[label_id])) {
          const label = this.props.labelsObj[label_id]
          return (
            <li
              id={label_id}
              key={label_id}
              onClick={(e)=> this.handleCheck(e)}
              className='noteIndexItemLabelLi'>
              <p className='insideLabelLiP'>{label.name}</p>
              <p
                id={label_id}
                className='deleteLabel'>X</p>
            </li>
          )
        }
      })
    )

    const startArr = ['#6B5B95', '#7F4145', '#3F69AA', '#BE9EC9', '#006E6D', '#485167', '#E94B3C'];

    debugger
    const noteIndexItemCollaborators = (
      this.props.note.collaborator_emails.map((collaborator_email, index) => {
        if (this.props.users[collaborator_email] !== this.props.currentUser.id) {
          return (
            <li
              id={index}
              key={index}>
              <span className = 'dot-small' style={{backgroundColor: startArr[index]}}>
                {collaborator_email.slice(0,1).toUpperCase()}
              </span>
            </li>
          )
        }
      })
    )

    return (
      <li
        className="note-index-item-wrapper"
        id={`index-item-${this.props.note.tab_index}`}
        style={visibilityStyle}>
        <div
          style={colorStyle}
          className='note-index-item'>
          <Link to={`/notes/${this.props.note.id}`}>
            <div
              onClick={() => this.handleClick()}
              style={colorStyle}
              className={this.props.note.title === "" ? 'note-index-item-title-nil' : 'note-index-item-title'}>
              {this.props.note.title}
              {pin}
            </div>
            <div
              onClick={() => this.handleClick()}
              style={colorStyle}
              className={'note-index-item-content'}>
              {body}
            </div>
          </Link>
          <ul className='note-index-item-label-div'>
            {noteIndexItemLabelLi}
            {noteIndexItemCollaborators}
          </ul>
          <div style={colorStyle} className='note-index-item-footer-container'>
            <div style={colorStyle} className='note-index-item-footer'>
              <Link to={`/collaborations/${this.props.note.id}`}>
                <input type='image' className="noteIcon" src={window.addUserButtonUrl} onClick={this.handleClick}></input>
              </Link>
              <span className="noteIcon" id='colorPaletteIcon'>
                {colorPaletteModal}
              </span>
              <input type='image' className="noteIcon" src={window.frameLandscapeUrl}></input>
              <span id='tagIcon' className="noteIcon">
                {labelSelectorModal}
              </span>
              <input type='image' className="noteIcon" src={window.garbageUrl} onClick={this.handleDelete}></input>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default NoteIndexItem;
