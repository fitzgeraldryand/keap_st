import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { merge } from 'lodash';

class CollaborationsModal extends React.Component {
  constructor(props) {
    super(props);
    const labelsState = {};
    // this.props.labels.forEach((label) => {
    //   labelsState[label.id] = label.name;
    // });
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   const labelsState = {};
  //   newProps.labels.forEach((label) => {
  //     labelsState[label.id] = label.name;
  //   });
  //   this.setState({labels: labelsState});
  // }

  handleSubmit(e) {
    // this.handleCreateSubmit();
    // this.props.labels.forEach((label) => {
    //   this.props.updateLabel({
    //     id: label.id,
    //     name: this.state.labels[label.id]
    //   });
    // });
    this.props.history.push(`/notes/${this.props.note.id}`);
  }

  componentDidMount() {
    this.props.fetchNote(this.props.note.id);
    this.props.getUsers();
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      document.removeEventListener('keydown', this.handleKeyDown);
      this.props.history.push(`/notes/${this.props.note.id}`);
    } else if (e.key === 'Enter') {
      document.removeEventListener('keydown', this.handleKeyDown);
      // this.handleSubmit();
      this.props.history.push(`/notes/${this.props.note.id}`);
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleDelete(e) {
    debugger
    let email = this.props.note.collaborator_emails[e.currentTarget.id]
    this.props.deleteCollaboration({
      note_id: this.props.note.id,
      collaborator_id: this.props.users[email]
    });
  }

  render() {
    debugger
    const modalScreen = (
      <div className='modal-screen' onClick={(e) => this.handleSubmit(e)}></div>
    );

    const startArr = ['#6B5B95', '#7F4145', '#3F69AA', '#BE9EC9', '#006E6D', '#485167', '#E94B3C'];

    const collaborationsForDeleting = (
      this.props.note.collaborator_emails.map((collaborator, index) => {
        return (
          <li
            className='collaborationsDeletable'
            key={index}>
            <span className = 'dot-collaborator' style={{backgroundColor: startArr[index]}}>
              {collaborator.slice(0,1).toUpperCase()}
            </span>
            <span className='collaborationNames'>
              <p>{collaborator}</p>
              <p className='collaborationSpace'>x</p>
              <p className='collaborationOwner'>{ index === 0 ? '(Owner)' : "" }</p>
            </span>
            <img
              id={index}
              className="labelIcon2"
              src={window.garbageUrl}
              onClick={(e) => this.handleDelete(e)}></img>
          </li>
        )
      })
    )

    // const labelUpdater = (
    //   <div className='labelContainer'>
    //     <p className='labelContainerCopy'>Edit Labels</p>
    //     <div className='inputDiv'>
    //       <div className='labelCreaterDiv'>
    //         <img className="labelIcon2" src={window.addUrl}></img>
    //         <form
    //           className='labelForm'
    //           onSubmit={() => this.handleCreateSubmit()}>
    //           <input
    //             type="text"
    //             value={this.state.newLabel}
    //             placeholder="Create new label"
    //             onChange={(e) => this.handleUpdateCreate(e)}
    //             />
    //           <button><img className="labelIcon2" src={window.tickUrl}></img></button>
    //         </form>
    //       </div>
    //       <ul className='labelModalUpdatableUL'>
    //         {labelsForUpdating}
    //       </ul>
    //     </div>
    //   </div>
    // );

    return (
        <div>
          {modalScreen}
          <div className='labelContainer'>
            <ul className='labelModalUpdatableUL'>
              {collaborationsForDeleting}
            </ul>
            <div className='labelUpdaterFooter'>
              <Link to={`/notes/${this.props.note.id}`}
                className='labelUpdaterFooterButton'>
                <p>DONE</p>
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

export default CollaborationsModal;
