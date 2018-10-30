import React from 'react';
import { Route } from 'react-router-dom';
import NoteIndexItem from './note_index_item';
import Masonry from 'react-masonry-component';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getLabels();
  }

  // componentDidMount() {
  //   if (window.location.hash != '#/') {
  //     this.props.fetchNotes();
  //     this.props.updateFilter('label_id', window.location.hash.slice(12));
  //   } else {
  //     this.props.fetchNotes();
  //   }
  // }

  render() {
    const unpinned = (
      <Masonry
        className='notesIndexIndividualWrapper'>
          {this.props.unpinnedNotes.map(note =>
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
              fetchNote={this.props.fetchNote}
              getLabels={this.props.getLabels}
              labelsObj={this.props.labelsObj}/>)}
      </Masonry>
    );

    const pinned = (
      <Masonry
        className='notesIndexIndividualWrapper'>
          {this.props.pinnedNotes.map(note =>
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
              fetchNote={this.props.fetchNote}
              getLabels={this.props.getLabels}
              labelsObj={this.props.labelsObj}/>)}
      </Masonry>
    );

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
    } else if (this.props.pinnedNotes.length === 0) {
      return (
        <div className = 'notesIndexWrapper'>{unpinned}</div>
      );
    } else if (this.props.unpinnedNotes.length === 0 ){
      return (
        <div className = 'notesIndexWrapper'>{pinned}</div>
      );
    } else {
      return (
        <div className = 'notesIndexWrapper'>
          <p className='pinnedText'> Pinned </p>
          {pinned}
          <p className='pinnedText'> Others </p>
          {unpinned}
        </div>
      );
    }
  }
}

export default NoteIndex;
