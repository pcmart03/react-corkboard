import React  from 'react';
import { DragDropContext } from 'react-dnd';
import update from 'react/lib/update';
import HTML5Backend from 'react-dnd-html5-backend';

import noteStore from '../store/notes-store';
import * as Actions from '../actions/actions.js';
import Note from './note.jsx';
import NoteEdit from './note-edit.jsx';
import AddNoteButton from './add-note-button.jsx';

class NoteContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: noteStore.getAll()
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.dropNote = this.dropNote.bind(this);
        this.moveNote = this.moveNote.bind(this);
    }

    componentWillMount() {
        noteStore.on('change', this.handleChange)
    }
    

    handleChange() {
        this.setState({
            notes: noteStore.getAll()
        })
    }

    dropNote() {
      Actions.reorderNotes(this.state.notes);
    }

    moveNote(dragIndex, hoverIndex) {
      const {notes} = this.state;
      const dragNote = notes[dragIndex];
      this.setState(update(this.state, {
        notes: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragNote],
          ]
        }
      }));
    }

    render() {
      const { notes } = this.state;
      const noteComponents = notes.map((note) => { 
        if (note.editMode === "false") {
            return <Note 
                key={note.id} 
                text={note.text} 
                id={note.id} 
                color={note.color} 
                orderIndex={note.orderIndex}
                moveNote = {this.moveNote}
                dropNote = {this.dropNote}
              />
        } else {
            return <NoteEdit 
              key={note.id} 
              text={note.text} 
              id={note.id} 
              isNew={note.isNew} 
              color={note.color}
              orderIndex={note.orderIndex}
              moveNote = {this.moveNote}
              dropNote = {this.dropNote}
              />
        }
      });
      return (
        <div className="notes-container">
          {noteComponents}
          <AddNoteButton />
        </div>
      );  
    }
}

export default DragDropContext(HTML5Backend)(NoteContainer);