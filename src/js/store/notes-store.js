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
        this.notes = [];
        if (this.storage.length > 0) {
            Object.keys(this.storage).forEach((key, index) => {
                if (key.includes("note")) {
                    item = this.storage.getItem(key);
                    this.notes.push(JSON.parse(item));
                }
            });
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
        console.log("dispatched")
        const id = "note" + String(Date.now());
        const note = {
            id,
            text: "",
            editMode: "true",
            isNew: "true"
        };
        this._saveNote(id, note);
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

    saveEdits(id, text){
        const item = {
            id,
            text,
            editMode: "false",
            isNew: "false"
        };
        this._saveNote(id, item);
        console.log("saved")
    }

    deleteNote(id){
        this.storage.removeItem(id);
        console.log("deleted")
    }

    handleActions(action){
        console.log("action received")
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
                this.saveEdits(action.id, action.text);
                break;
            case "DELETE_NOTE":
                this.deleteNote(action.id);
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