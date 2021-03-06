import appDispatcher from "../dispatcher/app-dispatcher.js";
const EventEmitter =  require('events');


class NoteStore extends EventEmitter {
    constructor() {
        super();
        this.storage = window.localStorage;
        this.notes = [];
    }

    _loadNotes(){
        let item;
        const loadedNotes = [];
        if (this.storage.length > 0) {
            Object.keys(this.storage).forEach((key, index) => {
                if (key.includes("note")) {
                    item = JSON.parse(this.storage.getItem(key));
                    item.orderIndex = parseInt(item.orderIndex, 10);
                    loadedNotes.push(item);
                }
            });
        // sort by orderIndex;
        this.notes = loadedNotes.sort((a, b) => a.orderIndex - b.orderIndex)
        }
    }
    _getNote(id){
        return JSON.parse(this.storage.getItem(id));
    }

    _saveNote(id, item) {
        this.storage.setItem(id, JSON.stringify(item));
    }


    getAll() {
        this._loadNotes();
        return this.notes;
    }
    
    createNote() {
        const id = "note" + String(Date.now());
        const orderIndex = this.notes.length;
        const note = {
            id,
            orderIndex,
            text: "",
            color: "note-white",
            editMode: "true",
            isNew: "true"
        };
        this._saveNote(id, note);
    }

    deleteNote(id){
        this.storage.removeItem(id);
    }


    editNote(id) {
        const item = this._getNote(id);
        item.editMode = "true";
        this._saveNote(id, item);
    }

    cancelEdit(id) {
        const item = this._getNote(id);
        item.editMode = "false";
        this._saveNote(id, item);
    }

    saveEdits(id, text, color, orderIndex){
        const item = {
            id,
            color,
            orderIndex,
            text: text.replace(/(<([^>]+)>)/ig,""),
            editMode: "false",
            isNew: "false"
        };
        this._saveNote(id, item);
    }


    setOrderIndex(notesArray) {
        const notes = [...notesArray] 
        notes.forEach((note, index) => {
            note.orderIndex = index;
            this._saveNote(note.id, note);
        });
    }

    handleActions(action){
        switch(action.type){
            case "CREATE_NOTE":
                this.createNote();
                break;
            case "EDIT_NOTE":
                this.editNote(action.id);
                break;
            case "CANCEL_EDIT":
                this.cancelEdit(action.id);
                break;
            case "SAVE_EDITS":
                this.saveEdits(action.id, action.text, action.color, action.orderIndex);
                break;
            case "DELETE_NOTE":
                this.deleteNote(action.id);
                break;
            case "REORDER_NOTES":
                this.setOrderIndex(action.notes)
                break;
            default:
                return;
        }
        this.emit('change');
    }
}

const noteStore = new NoteStore();

appDispatcher.register(noteStore.handleActions.bind(noteStore))

export default noteStore;