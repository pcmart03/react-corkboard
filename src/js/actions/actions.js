import appDispatcher from "../dispatcher/app-dispatcher.js";


export function createNote(){
    appDispatcher.dispatch({
        type: "CREATE_NOTE"
    });
}

export function editNote(id) {
    appDispatcher.dispatch({
        type: "EDIT_NOTE",
        id
    });
}

export function cancelEdit(id) {
    appDispatcher.dispatch({
        type: "CANCEL_EDIT",
        id
    });
}

export function saveEdits(id, text, color, orderIndex) {
    appDispatcher.dispatch({
        type: "SAVE_EDITS",
        id,
        text,
        color,
        orderIndex
    });
}

export function deleteNote(id) {
    appDispatcher.dispatch({
        type: "DELETE_NOTE",
        id
    });
}

export function reorderNotes(notes){
    appDispatcher.dispatch({
        type: "REORDER_NOTES",
        notes
    })
}