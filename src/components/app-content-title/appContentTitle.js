import React, {Component} from 'react';
import './appContentTitle.css'
import UserTitle from "./parts/userTitle/userTitle";
import WindmillTitle from "./parts/windmillTitle";
import {connect} from "react-redux";
import DeviceTitle from "./parts/deviceTitle/deviceTitle";

class AppContentTitle extends Component {
    defineContent() {
        if(this.props.type === 'profile') {
            return (<UserTitle/>)
        } else if(this.props.type === 'windmill') {
            return (<WindmillTitle/>)
        } else {
            return (<DeviceTitle/>)
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