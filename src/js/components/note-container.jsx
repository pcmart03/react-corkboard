import React from 'react';
import Note from './note.jsx'

export default class NoteContainer extends React.Component {
    render() {
      return (
        <div className="notes-container">
          <Note />
          <div className="add-note-container">
          <button type="button" className="add-note">
            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
            <span className="sr-only">create note</span>
          </button>
          </div>
        </div>
      );  
    }
}

