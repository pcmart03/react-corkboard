import React from 'react';
import NoteControls from './note-controls.jsx';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className={`note ${this.props.color}`} tabIndex="0">
            <div className="note-inner">
                <p>
                    { this.props.text }
                </p>
                <NoteControls id={this.props.id}/>
            </div>
        </div>
        );
    }
}