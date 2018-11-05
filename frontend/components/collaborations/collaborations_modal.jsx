import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { merge } from 'lodash';

class CollaborationsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: "",
      collaborator_emails_state: this.props.note.collaborator_emails.map((el) => {
        return (
          el[1]
        );
      })
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   const labelsState = {};
  //   newProps.labels.forEach((label) => {
  //     labelsState[label.id] = label.name;
  //   });
  //   this.setState({labels: labelsState});
  // }

  componentDidMount() {
    this.clearErrors();
    this.props.fetchNote(this.props.note.id);
    this.props.getUsers();
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleSave(e) {
    this.props.history.push(`/notes/${this.props.note.id}`);
    this.clearErrors();
  }

  handleUpdate(e) {
    this.setState({newEmail: e.currentTarget.value});
    if (this.props.errors.length > 0) {
      this.clearErrors();
    }
  }

  handleAdd() {
    if (Boolean(this.props.users[this.state.newEmail])) {
      let userID = this.props.users[this.state.newEmail];
      this.props.createCollaboration({
        note_id: this.props.note.id,
        collaborator_id: userID
      });
      this.state.newEmail = "";
    } else {
      this.props.receiveCollaborationErrors(['Invalid email']);
    }
  }

  handleCancel(e) {
    //if you've deleted any collaborators, get them back from component state
    this.state.collaborator_emails_state.forEach((email) => {
      if (!this.props.note.collaborator_emails.includes(email)) {
        let userID = this.props.users[email];
        this.props.createCollaboration({
          note_id: this.props.note.id,
          collaborator_id: userID
        });
      }
    });
    // if you've added any collaborators, remove from DB by checking against component state
    this.props.note.collaborator_emails.forEach((email) => {
      if (!this.state.collaborator_emails_state.includes(email)) {
        let userID = this.props.users[email];
        this.props.deleteCollaboration({
          note_id: this.props.note.id,
          collaborator_id: userID
        });
      }
    });
    this.handleSave(e);
  }

  clearErrors () {
    this.props.receiveNoCollaborationErrors();
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      document.removeEventListener('keydown', this.handleKeyDown);
      this.handleCancel(e);
    } else if (e.key === 'Enter') {
      document.removeEventListener('keydown', this.handleKeyDown);
      this.handleAdd();
      this.handleSave(e);
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
    let email = this.props.note.collaborator_emails[e.currentTarget.id]
    this.props.deleteCollaboration({
      note_id: this.props.note.id,
      collaborator_id: this.props.users[email]
    });
  }

  render() {
    const modalScreen = (
      <div className='modal-screen' onClick={(e) => this.handleSave(e)}></div>
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
              style={index === 0 ? {visibility: 'hidden'} : {}}
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
            <p className='labelContainerCopy collabCopy'>Collaborations</p>
            <ul className='labelModalUpdatableUL'>
              {collaborationsForDeleting}
            </ul>
            <div className='labelCreaterDiv'>
              <img className="labelIcon2" src={window.addUrl}></img>
              <form
                className='labelForm'
                onSubmit={() => this.handleAdd()}>
                <input
                  type="text"
                  value={this.state.newEmail}
                  placeholder="Person or email to share with"
                  onChange={(e) => this.handleUpdate(e)}
                  />
                <button><img className="labelIcon2" src={window.tickUrl}></img></button>
              </form>
            </div>
            <p className='errors'>{this.renderErrors()}</p>
            <div className='labelUpdaterFooter'>
              <span
                onClick={(e) => this.handleCancel(e)}
                className='labelUpdaterFooterButton'>
                <p>CANCEL</p>
              </span>
              <Link to={`/notes/${this.props.note.id}`}
                className='labelUpdaterFooterButton'>
                <p>SAVE</p>
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

export default CollaborationsModal;
