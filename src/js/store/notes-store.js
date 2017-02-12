const EventEmitter =  require('events');

class NoteStore extends EventEmitter {
    constructor() {
        super();
        this.notes = [
            {
             id: 1,
             text: "This is a note.",
             editMode: false,
             isNew: false
            },
            {
             id: 2,
             text: "this is another note",
             editMode: false,
             isNew: false
            }
        ];
    }

    getAll() {
        return this.notes;
    }

    createNote(text) {
        const id = Date.now();
        this.notes.push({
            id,
            text,
            editMode: false,
            isNew: true
        });
        this.emit('change');
    }
}

const noteStore = new NoteStore();

export default noteStore;