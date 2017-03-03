import React from 'react';
import EditControls from './note-edit-controls.jsx';

export default class NoteEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: this.props.text,
            color: this.props.color
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleTextChange(event) {
        this.setState({text: event.target.value})
    }
    
    handleColorChange(event) {
        this.setState({color: event.target.value})
    };

    render() {
        return (
            <div className={`note ${this.state.color}`} tabIndex="0">
                <div className="note-inner">
                    <p>
                        <textarea className={this.state.color} autoFocus value={this.state.text} onChange={this.handleTextChange} rows="5" cols="31" maxLength="150"></textarea>
                    </p>
                    <EditControls id={this.props.id} 
                        isNew={this.props.isNew} 
                        text={this.state.text} 
                        color={this.state.color} 
                        onColorChange={this.handleColorChange}
                    />
                </div>
            </div>);
    }
}
