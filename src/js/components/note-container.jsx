import React  from 'react';

import noteStore from '../store/notes-store';
import Note from './note.jsx';
import NoteEdit from './note-edit.jsx';
import AddNoteButton from './add-note-button.jsx';

export default class NoteContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: noteStore.getAll()
        }
        
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        noteStore.on('change', this.handleChange)
    }
    

    handleChange() {
        this.setState({
            notes: noteStore.getAll()
        })
    }

    render() {
      const { notes } = this.state;
      const noteComponents = notes.map((note) => { 
        if (note.editMode === "false") {
            return <Note key={note.id} text={note.text} id={note.id}/>
        } else {
            return <NoteEdit key={note.id} text={note.text} id={note.id} isNew={note.isNew}/>
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

