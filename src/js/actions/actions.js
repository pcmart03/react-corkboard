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

export function saveEdits(id, text) {
    appDispatcher.dispatch({
        type: "SAVE_EDITS",
        id,
        text
    });
}

export function deleteNote(id) {
        appDispatcher.dispatch({
        type: "DELETE_NOTE",
        id
    });
}