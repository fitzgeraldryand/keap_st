import React from 'react';
import { Route } from 'react-router-dom';
import NoteIndexItem from './note_index_item';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    if (this.props.notes.length === 0) {
      return (
        <div className='lightBulbWrapper'>
          <div className='lightBulbContainer'>
            <div className='lightBulbIconContainer'>
              <img className="lightBulbIcon" src={window.lightbulbUrl}></img>
            </div>
            <div className='notesCopy'>
              <p>Notes you add appear here</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='notesIndexWrapper'>
          <ul className='notesIndex'>
            {this.props.notes.map(note => <NoteIndexItem key={note.id} note={note} />)}
          </ul>
        </div>
      );
    }
  }
}

export default NoteIndex;
