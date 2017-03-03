require('../scss/index.scss');

import React from 'react';
import { render } from 'react-dom';
import AppHeader from './components/header.jsx';
import NoteContainer from './components/note-container.jsx'

class App extends React.Component {
    render() {
        return (
            <div>
                <AppHeader />
                <NoteContainer />
            </div>);
    }
}

render(<App />, document.getElementById('app'));