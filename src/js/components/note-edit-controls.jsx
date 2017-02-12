import React from 'react';
import * as Actions from '../actions/actions.js';

export default class EditControls extends React.Component {
    constructor(props) {
      super(props) 

      this.isNew = this.isNew.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.cancelChange = this.cancelChange.bind(this); 
      this.saveChange = this.saveChange.bind(this);
    }


    isNew() {
        if (this.props.isNew === "true") {
            return (
                <button role="cancel" onClick={this.deleteItem}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                    <span className="sr-only">Cancel</span>
                </button>); 
        }else {
            return (
                <button role="cancel" onClick={this.cancelChange}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                    <span className="sr-only">Cancel</span>
                </button>)   
        }
    }

    deleteItem() {
        Actions.deleteNote(this.props.id);
    }

    cancelChange() {
        Actions.cancelEdit(this.props.id);
    }

    saveChange() {
        Actions.saveEdits(this.props.id, this.props.text);
    }

    render() {
        return(
            <div className='note-controls'>
                <button role="submit" onClick={this.saveChange}>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span className="sr-only">Save</span>
                </button>
                {this.isNew()}
            </div>
        );
    }
}