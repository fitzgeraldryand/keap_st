import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { merge } from 'lodash';

class LabelModal extends React.Component {
  constructor(props) {
    super(props);
    const labelsState = {};
    this.props.labels.forEach((label) => {
      labelsState[label.id] = label.name;
    });
    this.state = {
      newLabel: '',
      labels: labelsState
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateCreate = this.handleUpdateCreate.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.handleUpdateUpdate = this.handleUpdateUpdate.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.getLabels();
  }

  componentWillReceiveProps(newProps) {
    const labelsState = {};
    newProps.labels.forEach((label) => {
      labelsState[label.id] = label.name;
    });
    this.setState({labels: labelsState});
  }

  handleSubmit(e) {
    this.handleCreateSubmit();
    this.props.labels.forEach((label) => {
      this.props.updateLabel({
        id: label.id,
        name: this.state.labels[label.id]
      });
    });
    this.props.history.push('/');
  }

  handleUpdateCreate(e) {
    this.setState({newLabel: e.currentTarget.value});
  }

  handleCreateSubmit() {
    if (Boolean(this.state.newLabel)) {
      this.props.createLabel({
        name: this.state.newLabel,
        creator_id: this.props.currentUser
      });
      this.setState({newLabel: ''});
    }
  }



  handleUpdateUpdate(e) {
    let stateCopy = merge({}, this.state.labels);
    stateCopy[parseInt(e.currentTarget.id)] = e.currentTarget.value;
    this.setState({labels: stateCopy});
  }

  handleUpdateSubmit(e) {
    this.props.updateLabel({
      id: parseInt(e.currentTarget.id),
      name: this.state.labels[parseInt(e.currentTarget.id)]
    });
  }

  handleDelete(e) {
    this.props.deleteLabel(parseInt(e.currentTarget.id));
  }

  render() {
    const modalScreen = (
      <div className='modal-screen' onClick={(e) => this.handleSubmit(e)}></div>
    );

    const labelsForUpdating = (
      this.props.labels.map((label) => {
        return (
          <li
            className='labelModalUpdatable'
            key={label.id}>
            <img
              id={label.id}
              className="labelIcon2"
              src={window.garbageUrl}
              onClick={(e) => this.handleDelete(e)}></img>
            <form
              id={label.id}
              className='labelForm'
              onSubmit={(e) => this.handleUpdateSubmit(e)}>
              <input
                className = 'labelModalUpdatableInput'
                id={label.id}
                type="text"
                value={this.state.labels[label.id]}
                placeholder="Enter label name"
                onChange={(e) => this.handleUpdateUpdate(e)}
                />
              <button id={label.id}>
                <img className="labelIcon2" src={window.tickUrl}></img>
              </button>
            </form>
          </li>
        )
      })
    )

    const labelUpdater = (
      <div className='labelContainer'>
        <p className='labelContainerCopy'>Edit Labels</p>
        <div className='inputDiv'>
          <div className='labelCreaterDiv'>
            <img className="labelIcon2" src={window.addUrl}></img>
            <form
              className='labelForm'
              onSubmit={() => this.handleCreateSubmit()}>
              <input
                type="text"
                value={this.state.newLabel}
                placeholder="Create new label"
                onChange={(e) => this.handleUpdateCreate(e)}
                />
              <button><img className="labelIcon2" src={window.tickUrl}></img></button>
            </form>
          </div>
          <ul className='labelModalUpdatableUL'>
            {labelsForUpdating}
          </ul>
        </div>
        <div className='labelUpdaterFooter'>
          <div
            onClick={(e) => this.handleSubmit(e)}
            className='labelUpdaterFooterButton'>
            <p>DONE</p>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {modalScreen}
        {labelUpdater}
      </div>
    );
  }
}

export default LabelModal;
