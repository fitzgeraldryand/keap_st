import React from 'react';
import { Link } from 'react-router-dom';

const NoteIndexItem = (props) => (
  <li className="note-index-item">
    <Link to={`/note/${note.id}`}>
    </Link>
  </li>
);

export default NoteIndexItem;
