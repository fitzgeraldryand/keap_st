import React from 'react';
import { Route } from 'react-router-dom';
import NoteIndexItem from './note_index_item';
import Masonry from 'react-masonry-component';

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
        <Masonry
          className='notesIndexWrapper'>
            {this.props.notes.map(note =>
              <NoteIndexItem
                key={note.id}
                note={note}
                labels={this.props.labels}
                deleteNote={this.props.deleteNote}
                updateNote={this.props.updateNote}
                addHiddenNote={this.props.addHiddenNote}
                hiddenNote={this.props.hiddenNote}
                createLabelling={this.props.createLabelling}
                deleteLabelling={this.props.deleteLabelling}
                fetchNote={this.props.fetchNote}/>)}
        </Masonry>
      );
    }
  }
}

export default NoteIndex;
