import React, {Component} from 'react';

import AppHeader from '../app-header';
import AppContainer from "../app-container/appContainer";

class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <AppContainer/>
            </div>
        );
    }
}

export default App