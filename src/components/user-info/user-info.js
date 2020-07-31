import React, {Component} from 'react';
import './user-info.css'

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = ({editing: false, ...props.infos})
    }

    changeHandle = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    };

    clickHandler = () => {
        this.setState({editing: !this.state.editing})
    }

    render() {
        console.log(this.state)
        let {infos, fields} = this.props
        return (
            <div className={'user-info'}>
                <div className={'field-wrapper'}>
                    {fields.map((field) => {
                        return (<span className={'field right'}>{field}</span>)
                    })}
                </div>
                <div className={'divider'} />
                <div className={'field-wrapper'}>
                    {Object.entries(infos).map((info) => {
                        return this.state.editing ?
                            (<input
                                className={'user-info-input field left'}
                                value={this.state[info[0]]}
                                name={info[0]}
                                onChange={this.changeHandle}
                            />) :
                            (<span
                                className={'field left'}
                            >
                                {info[1]}
                            </span>)
                    })}
                </div>
                <i className="info-icon fa fa-edit" onClick={this.clickHandler}/>
            </div>
        );
    }
}

export default UserInfo;