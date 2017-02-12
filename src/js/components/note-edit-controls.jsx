import React from 'react';

export default class EditControls extends React.Component {
    constructor(props) {
      super(props) 

      this.isNew = this.isNew.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.cancelChange = this.cancelChange.bind(this); 
      this.saveChange = this.saveChange.bind(this);
    }


    isNew() {
        return this.props.isNew ? this.deleteItem : this.cancelChange;
    }

    deleteItem() {

    }

    cancelChange() {

    }

    saveChange() {

    }

    render() {
        return(
            <div className='note-controls'>
                <button role="submit" onClick={this.saveChange}>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span className="sr-only">Save</span>
                </button>
                <button role="cancel" onClick={this.isNew}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                    <span className="sr-only">Cancel</span>
                </button>
            </div>
        );
    }
}