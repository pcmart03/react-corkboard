import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                      hover: false, 
                      focus:false, 
                      showControls: false
                      };
        this.handleHover = this.handleHover.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleHover() {
        if (!this.state.focus) {
            this.setState({
                           hover: !this.state.hover, 
                           showControls: !this.state.showControls
                          });
        }
    }
    
    handleFocus() {
        if (!this.state.hover) {
            this.setState({
                           focus: !this.state.focus,
                           showControls: !this.state.showControls
                          });
        }
    }
    render() {
        return (
        <div className="note" tabIndex="1" onFocus={this.handleFocus} onBlur={this.handleFocus} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
            <div className="note-inner">
                <p>This is a note. With some extra text.</p>
                    <div className={this.state.showControls ? 'note-controls active' : 'note-controls'}>
                        <button>
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