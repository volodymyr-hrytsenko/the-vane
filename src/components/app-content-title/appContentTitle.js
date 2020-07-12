import React, {Component} from 'react';
import { connect } from "react-redux";
import './appContentTitle.css'
import '../../pictures/background.jpg'

class AppContentTitle extends Component {
    render() {
        const user = this.props.user
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
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(AppContentTitle);