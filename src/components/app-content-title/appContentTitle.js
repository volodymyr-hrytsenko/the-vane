import React, {Component} from 'react';
import './appContentTitle.css'
import UserTitle from "./parts/userTitle/userTitle";
import WindmillTitle from "./parts/windmillTitle";
import {connect} from "react-redux";
import DeviceTitle from "./parts/deviceTitle/deviceTitle";
import MainTitle from "./parts/MainTitle/mainTitle";
import DiagramTitle from "./parts/diagramTitle/diagramTitle";

class AppContentTitle extends Component {
    defineContent() {
        switch(this.props.type) {
            case 'profile':
                return (<UserTitle/>);
            case 'windmill':
                return (<WindmillTitle/>);
            case 'main':
                return (<MainTitle/>);
            case 'devices':
                return (<DeviceTitle/>)
            case 'diagram':
                return (<DiagramTitle/>)
        }
    }

    render() {
        return (
            <div className={'content-title'}>
                {this.defineContent()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        type: state.titleReducer.titleType
    }
}

export default connect(mapStateToProps)(AppContentTitle);