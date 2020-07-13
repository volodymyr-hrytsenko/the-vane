import React, {Component} from 'react';
import { connect } from "react-redux";
import './appContentTitle.css'

class AppContentTitle extends Component {
    render() {
        const {user, windmills} = this.props
        return (
            <div className={'content-title'}>
                <span>{ `${user.name} ${user.surname}` }</span>
                <span>{ `${user.email}` }</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        windmills: state.windmillsReducer.windmills
    }
}

export default connect(mapStateToProps)(AppContentTitle);