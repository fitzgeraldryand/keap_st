import React from 'react';
import { merge, _ } from 'lodash';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      body: "",
      title: "",
      color: "rgb(250, 250, 250)",
      images: {},
      imagesCounter: 0,
      labellingState: {}
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

  componentWillReceiveProps(newProps) {
    const labellingState = {};
    newProps.labels.forEach((label) => {
      labellingState[label.id] = false;
    });
    this.setState({labellingState: labellingState});
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
    const tab_index = (this.props.notes.length > 0) ? (this.props.notes[0].tab_index + 1) : 0;
    const labels = Object.keys(this.state.labellingState);
    const labelsFormatted = [];
    labels.forEach((key) => {
      if (this.state.labellingState[parseInt(key)] === true) {
        labelsFormatted.push({label_id: parseInt(key)});
      }
    });

    if ((Boolean(this.state.title) || Boolean(this.state.body))) {
      this.props.createNote({
          author_id: this.props.currentUser,
          title: this.state.title,
          body: this.state.body,
          color: this.state.color,
          tab_index: tab_index,
          pinned: false,
          labellings_attributes: labelsFormatted
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
    document.removeEventListener('keydown', this.handleKeyDown);
    this.submit();
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      document.removeEventListener('mousedown', this.handleOuterClick);
      document.removeEventListener('keydown', this.handleKeyDown);
      this.toggleClicked();
    }
    //   else if (e.key === 'Enter') {
    //   this.handleSubmit(e);
    // }
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

  handleCheck(e) {
    const copiedState = merge({}, this.state.labellingState);
    copiedState[parseInt(e.currentTarget.id)] = !this.state.labellingState[parseInt(e.currentTarget.id)];

    this.setState(
      {labellingState: copiedState}
    );
  }

  // componentDidMount() {
  //   document.addEventListener('mousedown', this.handleClick, false);
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener('mousedown', this.handleClick, false);
  // }

  // formatLabels() {
  //   const labels = Object.keys(this.state.labellingState);
  //   const labelsForDiv = [];
  //   labels.forEach((key) => {
  //     if (this.state.labellingState[parseInt(key)] === true) {
  //       labelsForDiv.push(parseInt(key));
  //     }
  //   });
  //   return labelsForDiv;
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
    <span id='tagIcon' className="noteIcon">
    </span>

    // const noteIndexItemLabelLi = (
    //   const labels = Object.keys(this.state.labellingState);
    //   const labelsForDiv = [];
    //   labels.forEach((key) => {
    //     if (this.state.labellingState[parseInt(key)] === true) {
    //       labelsForDiv.push(parseInt(key));
    //     }
    //   });
    //   labelsForDiv.map((label_id) => {
    //     const label = this.props.labelsObj[label_id]
    //     return (
    //       <li
    //         id={label_id}
    //         key={label_id}
    //         onClick={(e)=> this.handleCheck(e)}
    //         className='noteIndexItemLabelLi'>
    //         <div className='insideLabelLi'>
    //           <p className='insideLabelLiP'>{label.name}</p>
    //           <p
    //             id={label_id}
    //             className='deleteLabel'>X</p>
    //         </div>
    //       </li>
    //     )
    //   })
    // )

    // <ul className='note-index-item-label-div'>
    //   {noteIndexItemLabelLi}
    // </ul>

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
            <div className="image-upload">
              <label for="imgIcon">
                <img className="noteIcon" src={window.frameLandscapeUrl}></img>
              </label>
              <input id="imgIcon" type="file"/>
            </div>
            <span id='tagIcon' className="noteIcon">
              {labelSelectorModal}
            </span>
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
