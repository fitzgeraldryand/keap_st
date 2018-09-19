import React from 'react';
import { Route } from 'react-router-dom';

class LabelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getLabels();
  }

  render() {
    const labelHeader = (
      <div className='labelHeader'>
        <p>Labels</p>
        <div className='labelEdit'>
          <p>EDIT</p>
        </div>
      </div>
    );

    const labelFooter = (
      <div className='labelFooter'>
        <img className="sidebarIcon" src={window.addUrl}></img>
        <p className='labelFooterCopy'>Create new label</p>
      </div>
    );

    const labelContent = (
      <ul className='labelContent'>
        {this.props.labels.map(label =>
          <li className='labelLi'>
            <img className="sidebarIcon" src={window.tagUrl}></img>
            <p className='labelName'>{label.name}</p>
          </li>
        )}
      </ul>
    );

    return (
      <div className='content-sidebar'>
        <div className = 'label-section'>
          {labelHeader}
          {labelContent}
          {labelFooter}
        </div>
      </div>
    )
  }
}

export default LabelIndex;
