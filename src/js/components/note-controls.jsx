import React from 'react';

export default class NoteControls extends React.Component {
    constructor(props) {
        super(props)
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    editNote() {
        console.log("edit");
    }

    deleteNote() {
        console.log("delete");
    }

    render() {
        return (
            <div className='note-controls'>
                <button role="button" onClick={this.editNote}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    <span className="sr-only">Edit</span>
                </button>
                <button role="delete" onClick={this.deleteNote}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                    <span className="sr-only">Delete</span>
                </button>
            </div>
        );
    }
}