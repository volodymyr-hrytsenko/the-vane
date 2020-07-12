import React from 'react';

import AppHeader from '../app-header';
import AppNavbar from '../app-navbar';
import AppContent from '../app-content';

import './app.css';

const App = () => {
    return(
        <div className="app">
            <AppHeader/>
            <div className="main">
                <AppNavbar/>
                <AppContent/>
            </div>
        </div>
    );
}

export default App;