import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import LabelModal from './label_modal.jsx';
import { withRouter } from 'react-router';


class LabelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getLabels();
  }

  handleLink(e) {
    this.props.history.push('/labels');
  }

  isClassDefaultForm(element) {
    return element.className === 'noteDefaultForm';
  }


  handleClick(e) {
    this.props.updateFilter('label_id', parseInt(e.currentTarget.id));
    this.props.history.push(`?label_id=${parseInt(e.currentTarget.id)}`);
  }

  render() {
    const labelHeader = (
      <div className='labelHeader'>
        <p>Labels</p>
        <Link to='/labels' className='labelEdit'>
          <p>EDIT</p>
        </Link>
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
        {this.props.labels.map((label) => {
          return (
            <li
              className='labelLi'
              key={label.id}
              id={label.id}
              onClick={(e) => this.handleClick(e)}>
              <img className="labelIcon" src={window.tagUrl}></img>
              <p className='labelFooterCopy'>{label.name}</p>
            </li>
          )}
        )}
      </ul>
    );
    return (
        <div className = 'label-section'>
          {labelHeader}
          {labelContent}
          {labelFooter}
        </div>
    )
  }
}

export default withRouter(LabelIndex);
