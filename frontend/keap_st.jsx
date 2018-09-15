import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionAPIUtil from './util/session_api_util.js';
import {login, logout, getUsers} from './actions/session_actions';
import * as NoteUtilActions from './actions/note_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
} else {
  store = configureStore();
}
  //testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.getUsers = getUsers;
  window.fetchNotes = NoteUtilActions.fetchNotes;
  window.createNote = NoteUtilActions.createNote;
  window.fetchNote = NoteUtilActions.fetchNote;
  window.updateNote = NoteUtilActions.updateNote;
  window.deleteNote = NoteUtilActions.deleteNote;
  //testing end
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
