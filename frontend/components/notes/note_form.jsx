import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      body: "",
      title: "",
      color: "rgb(250, 250, 250)"
    };
    this.toggleClicked = this.toggleClicked.bind(this);
    this.handleOuterClick = this.handleOuterClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.submit = this.submit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  toggleClicked() {
    this.setState({clicked: !this.state.clicked});
  }

  isClassUserInfo(element) {
    return element.className === 'userInfoContainer';
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

  isClassDefaultForm(element) {
    return element.className === 'noteDefaultForm';
  }

  isClassClickedForm(element) {
    return element.className === 'noteClickedForm';
  }
  //
  // handleClickInForm(e) {
  //   e.stopPropagation();
  // }

  submit() {
    if ((Boolean(this.state.title) || Boolean(this.state.body))) {
      this.props.createNote({
          author_id: this.props.currentUser,
          title: this.state.title,
          body: this.state.body,
          color: this.state.color,
          tab_index: (this.props.notes[0].tab_index + 1),
          pinned: false
      });
      this.setState({title: "", body: "", color: "rgb(250, 250, 250)"});
    } else {
      this.setState({title: "", body: "", color: "rgb(250, 250, 250)"});
    }
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.toggleClicked();
    document.removeEventListener('mousedown', this.handleOuterClick);
    this.submit();
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      document.removeEventListener('mousedown', this.handleOuterClick);
      document.removeEventListener('keydown', this.handleKeyDown);
      this.toggleClicked();
    }
  }

  handleOuterClick(e) {
    if (this.state.clicked && e.path.some(this.isClassClickedForm)) {
      e.stopPropagation();
    } else {
      document.removeEventListener('mousedown', this.handleOuterClick);
      document.removeEventListener('keydown', this.handleKeyDown);
      this.toggleClicked();
      this.submit();
    }
  }

  // componentDidMount() {
  //   document.addEventListener('mousedown', this.handleClick, false);
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener('mousedown', this.handleClick, false);
  // }

  render() {
    const colorStyle = {backgroundColor: this.state.color};

    const checkmark = (
      <img className="tick" src={window.tickUrl}></img>
    );

    const defaultForm = (
      <div className="noteDefaultForm" onClick={(e) => {
          e.stopPropagation();
          this.toggleClicked();
          document.addEventListener('mousedown', this.handleOuterClick);
          document.addEventListener('keydown', this.handleKeyDown)
        }}>
        <p>Take a note... </p>
        <div className='noteFormIcons'>
          <img className='noteFormIcon' src={window.bulletListUrl}></img>
          <img className='noteFormIcon' src={window.frameLandscapeUrl}></img>
        </div>
      </div>
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

    const clickedForm = (
      <form className="noteClickedForm"
        id='newForm'
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
          <textarea
            id="bodyForm"
            form='newForm'
            value={this.state.body || ''}
            placeholder="Take a note..."
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
          </div>
          <div className='bottomClose'>
            <button>CLOSE</button>
          </div>
        </div>
      </form>
    );

    if (this.state.clicked) {
      return (
     <div>{clickedForm}</div>
    )} else {
      return <div>{defaultForm}</div>
    }
  }
}

export default NoteForm;
