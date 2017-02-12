import React from 'react';

export default class AddNoteButton extends React.Component {
    render() {
        return (
            <div className="add-note-container">
            <button type="button" className="add-note">
              <i className="fa fa-plus-square-o" aria-hidden="true"></i>
              <span className="sr-only">create note</span>
            </button>
            </div>
        );
    }
}