import React, {Component} from 'react';
import AppContentTitle from "../app-content-title/appContentTitle";
import './appContent.css'

class AppContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={"app-content"}>
                <AppContentTitle/>
                {this.props.children}
            </div>
        );
    }
}




export default AppContent;