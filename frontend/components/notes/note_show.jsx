import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.note.body,
      title: this.props.note.title,
      color: this.props.note.color || '#fafafa'
    };
    // this.handleOuterClick = this.handleOuterClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.submit = this.submit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      body: newProps.note.body,
      title: newProps.note.title,
      color: newProps.note.color});
  }

  isClassUpdateForm(element) {
    return element.className === 'updateForm';
  }

  handleDelete() {
    this.props.deleteNote(this.props.note.id);
    this.props.history.push('/');
  }

  // handleOuterClick(e) {
  //   debugger
  //   if (e.path.some(this.isClassUpdateForm)) {
  //     e.stopPropagation();
  //   } else {
  //     this.submit();
  //     this.props.deleteHiddenNote();
  //
  //   }
  // }

  submit() {
    if ((Boolean(this.state.title) || Boolean(this.state.body))) {
      this.props.updateNote({
          id: this.props.note.id,
          title: this.state.title,
          body: this.state.body,
          color: this.state.color
      });
      this.setState({title: this.props.note.title, body: this.props.note.body, color: this.props.note.color});
    } else {
      this.setState({title: this.props.note.title, body: this.props.note.body, color: this.props.note.color});
    }
    return false;
  }

  handleSubmit(e) {
    this.submit();
    this.props.deleteHiddenNote();
    this.props.history.push('/');
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDotClick(e) {
    e.stopPropagation();
    this.setState({color: e.currentTarget.style.backgroundColor});
  }

  render() {
    const colorStyle = {backgroundColor: this.state.color};

    const checkmark = (
      <img className="tick" src={window.tickUrl}></img>
    );

    const colorPaletteModal = (
      <div className = "colorPaletteDropdownWrapper">
        <div className="colorPaletteDropdown">
          <div className='colorDot' style={{backgroundColor: 'rgb(207, 216, 220)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(207, 216, 220)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(215, 204, 200)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(215, 204, 200)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(248, 187, 208)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(248, 187, 208)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(179, 136, 255)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(179, 136, 255)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(130, 177, 255)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(130, 177, 255)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(128, 216, 255)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(128, 216, 255)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(167, 254, 235)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(167, 254, 235)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(204, 253, 144)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(204, 253, 144)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(255, 253, 141)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(255, 253, 141)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(255, 209, 128)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(255, 209, 128)' ? checkmark : ""}
          </div>
          <div className='colorDot' style={{backgroundColor: 'rgb(254, 138, 128)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(254, 138, 128)' ? checkmark : ""}
          </div>
          <div className='colorDot' id='colorDotWhite' style={{backgroundColor: 'rgb(250, 250, 250)'}}
            onClick={(e) => this.handleDotClick(e)}>
            {this.state.color === 'rgb(250, 250, 250)' ? checkmark : ""}
          </div>
        </div>
      </div>
    );

    // const updateForm = (
    //   <form className="updateForm"
    //     style={colorStyle}
    //     onSubmit={(e) => this.handleSubmit(e)}>
    //     <div className='titleDiv'>
    //       <input
    //         type="text"
    //         id="titleForm"
    //         value={this.state.title || ''}
    //         placeholder="Title"
    //         onChange={this.update('title')}
    //         />
    //     </div>
    //     <div className='bodyDiv'>
    //       <input
    //         type="text"
    //         id="bodyForm"
    //         value={this.state.body || ''}
    //         placeholder="Note"
    //         onChange={this.update('body')}
    //         />
    //     </div>
    //     <div className='formBottom'>
    //       <div className='bottomButtons'>
    //         <img className="noteIcon" src={window.addUserButtonUrl}></img>
    //         <span className="noteIcon" id='colorPaletteIcon'>
    //           {colorPaletteModal}
    //         </span>
    //         <img className="noteIcon" src={window.frameLandscapeUrl}></img>
    //         <img className="noteIcon" src={window.tagUrl}></img>
    //         <img className="noteIcon" src={window.garbageUrl}></img>
    //       </div>
    //       <div className='bottomClose'>
    //         <button>
    //           <NavLink to='/'>CLOSE</NavLink>
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // );

    return (
      <div>
        <div className='modal-screen' onClick={(e) => this.handleSubmit(e)}></div>
        <form className="updateForm"
          style={colorStyle}
          onSubmit={(e) => this.handleSubmit(e)}>
          <div className='titleDiv'>
            <input
              type="text"
              id="titleForm"
              value={this.state.title || ''}
              placeholder="Title"
              onChange={this.update('title')}
              />
          </div>
          <div className='bodyDiv'>
            <input
              type="text"
              id="bodyForm"
              value={this.state.body || ''}
              placeholder="Note"
              onChange={this.update('body')}
              />
          </div>
          <div className='formBottom'>
            <div className='bottomButtons'>
              <img className="noteIcon" src={window.addUserButtonUrl}></img>
              <span className="noteIcon" id='colorPaletteIcon'>
                {colorPaletteModal}
              </span>
              <img className="noteIcon" src={window.frameLandscapeUrl}></img>
              <img className="noteIcon" src={window.tagUrl}></img>
              <img onClick={() => this.handleDelete()} className="noteIcon" src={window.garbageUrl}></img>
            </div>
            <div className='bottomClose'>
              <button>CLOSE</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default NoteShow;
