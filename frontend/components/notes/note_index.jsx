import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NoteIndexItem from './note_index_item';

class NoteIndex extends Component {
  componentDidMount() {
    this.props.requestAllNote();
  }

  render() {
    return (
      <section className="notesIndexWrapper">
        <ul className='notesIndex'>
          {this.props.notes.map(note => <NoteIndexItem key={note.id} note={note} />)}
        </ul>
      </section>
    );
  }
}

export default NoteIndex;
