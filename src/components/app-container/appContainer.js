import React, {Component} from 'react';
import AppNavbar from "../app-navbar";
import AppContent from "../app-content";
import './appContainer.css'

class AppContainer extends Component {
    render() {
        return (
            <div className="main">
                <AppNavbar/>
                <AppContent/>
            </div>
        );
    }
}

export default AppContainer;