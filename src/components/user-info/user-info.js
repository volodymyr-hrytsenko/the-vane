import React, {Component} from 'react';
import './user-info.css'

class UserInfo extends Component {
    render() {
        return (
            <div className={'user-info'}>
                <div className={'field-wrapper'}>
                    {this.props.fields.map((field) => {
                        return (<span className={'field right'}>{field}</span>)
                    })}
                </div>
                <div className={'divider'} />
                <div className={'field-wrapper'}>
                    {this.props.infos.map((info) => {
                        return (<span className={'field left'}>{info}</span>)
                    })}
                </div>
            </div>
        );
    }
}

export default UserInfo;