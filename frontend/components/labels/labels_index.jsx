import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import LabelModal from './label_modal.jsx';

class LabelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
  }

  componentDidMount() {
    this.props.getLabels();
  }

  handleLink(e) {
    this.props.history.push('/labels');
  }

  render() {
    const labelHeader = (
      <div className='labelHeader'>
        <p>Labels</p>
        <div className='labelEdit'>
          <Link to='/labels'>EDIT</Link>
        </div>
      </div>
    );

    const labelFooter = (
      <Link to='/labels' className='labelFooter'>
        <img className="labelIcon" src={window.addUrl}></img>
        <p className='labelFooterCopy'>Create new label</p>
      </Link>
    );

    const labelContent = (
      <ul className='labelContent'>
        {this.props.labels.map((label, index) => {
          return (
            <li
              className='labelLi'
              key={index}>
              <img className="labelIcon" src={window.tagUrl}></img>
              <p className='labelFooterCopy'>{label.name}</p>
            </li>
          )}
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
