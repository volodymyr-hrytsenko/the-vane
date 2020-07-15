import React, {Component} from 'react';
import './appContentTitle.css'
import UserTitle from "./parts/userTitle/userTitle";
import WindmillTitle from "./parts/windmillTitle";
import {connect} from "react-redux";

class AppContentTitle extends Component {
    defineContent() {
        if(this.props.type === 'profile') {
            return (<UserTitle/>)
        } else {
            return (<WindmillTitle/>)
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