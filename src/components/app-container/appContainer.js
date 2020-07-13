import React, {Component} from 'react';
import AppNavbar from "../app-navbar";
import './appContainer.css'

class AppContainer extends Component {
    render() {
        return (
            <div className="main">
                <AppNavbar/>
            </div>
        );
    }
}

export default AppContainer;