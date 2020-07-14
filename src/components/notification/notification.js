import React, {Component} from 'react';
import {capitalize} from "../../service/utilities";
import './notification.css'

class Notification extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'notification ' + this.props.type}>
                <p className={'notification-title'}>{capitalize(this.props.type)}</p>
                <p className={'notification-text'}>{this.props.children}</p>
            </div>
        );
    }
}

export default Notification;