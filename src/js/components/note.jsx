import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                      hover: false, 
                      focus:false, 
                      showControls: false,
                      editMode: false
                      };
        this.handleHover = this.handleHover.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.editNote = this.editNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.focusOnTextArea = this.focusOnTextArea.bind(this);
    }

    handleHover() {
        if (!this.state.focus && !this.state.editMode) {
            this.setState({
                           hover: !this.state.hover, 
                           showControls: !this.state.showControls
                          });
        }
    }
    
    handleFocus() {
        if (!this.state.hover && !this.state.editMode) {
            this.setState({
                           focus: !this.state.focus,
                           showControls: !this.state.showControls
                          });
        }
    }

    toggleEditMode() {
        this.setState({
                  showControls: !this.state.showControls,
                  editMode: !this.state.editMode})
    }

    editNote() {
        this.toggleEditMode();
        this.focusOnTextArea();
    }
    saveNote() {
        this.toggleEditMode()
    }

    focusOnTextArea() {
        this.textInput.focus();
    }
    render() {
        return (
        <div className="note" tabIndex="1" onFocus={this.handleFocus} onBlur={this.handleFocus} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
            <div className="note-inner">
                <p className={this.state.editMode ? 'hidden' : 'visible'}>This is a note. With some extra text.</p>
                <textarea ref={(textarea) => {this.textInput = textarea; }} className={this.state.editMode ? 'visible' : 'hidden'} tabIndex={this.state.editMode ? "1" : "0"} ></textarea>
                    <div className={this.state.showControls ? 'note-controls active' : 'note-controls'}>
                        <button role="button" onClick={this.editNote}>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <span className="sr-only">Edit</span>
                        </button>
                        <button>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                            <span className="sr-only">Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}