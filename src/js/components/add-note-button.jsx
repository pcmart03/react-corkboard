import React from 'react';
import * as Actions from '../actions/actions.js';

export default class AddNoteButton extends React.Component {
    constructor(){
        super();
        this.createNote = this.createNote.bind(this);
    }

    createNote(){
        Actions.createNote();
    }
    render() {
        return (
            <div className="add-note-container">
            <button type="button" className="add-note" onClick={this.createNote}>
              <i className="fa fa-plus-square-o" aria-hidden="true"></i>
              <span className="sr-only">create note</span>
            </button>
            </div>
        );
    }
}