require('../scss/index.scss');

import React from 'react';
import { render } from 'react-dom';
import NoteContainer from './components/note-container.jsx'

class App extends React.Component {
    render() {
        return (<NoteContainer />);
    }
}

render(<App />, document.getElementById('app'));