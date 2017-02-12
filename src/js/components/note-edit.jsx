import React from 'react';
import EditControls from './note-edit-controls.jsx';

export default class NoteEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value})
    }
    
    render() {
        return (
            <div className="note" tabIndex="0">
                <div className="note-inner">
                    <p>
                        <textarea autoFocus value={this.state.text} onChange={this.handleChange} rows="5" cols="31" maxLength="150"></textarea>
                    </p>
                    <EditControls id={this.props.id} isNew={this.props.isNew}/>
                </div>
            </div>);
    }
}
