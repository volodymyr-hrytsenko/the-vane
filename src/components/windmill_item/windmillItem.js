import React, {Component} from 'react';
import './windmillItem.css'
import FormCheckbox from "../form-checkbox/form-checkbox";
import FormButton from "../form-button/form-button";
import api from "../../service/api";
import {bindActionCreators} from "redux";
import {deleteWindmill} from "../../redux/actions/windmillActions";
import {connect} from "react-redux";

class WindmillItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            clicked: false
        }
    }

    clickHandler = (e) => {
        if (e.target.tagName === 'BUTTON') return
        this.setState({opened: !this.state.opened})
    }

    deleteHandler = (e) => {
        this.setState({clicked: true})
        api.deleteWindmill(this.props.windmill.id)
            .then(success => {
                this.props.delete(this.props.windmill.id)
            })
            .catch(err => {
                console.log(err)
                this.setState({clicked: false})
            })
    }

    render() {
        console.log(this.props.deleteWindmill)
        let { windmill, mode } = this.props
        return (
            <React.Fragment>
                <tr onClick={mode !== 'add' ? this.clickHandler : null}>
                    {mode === 'add' &&
                    <td className={'checkbox'}>
                        <FormCheckbox windmill={this.props.windmill} />
                    </td>}
                    <td className={'td-right'}>{windmill.titleUa}</td>
                    <td>{windmill.bladesCount}</td>
                    <td>{windmill.bladesLength}</td>
                    <td>{windmill.startSpeed} м/с</td>
                    <td>{windmill.nominalSpeed} м/с</td>
                    <td className={'td-left'}>{windmill.nominalVoltage} В</td>
                    {mode === 'view' &&
                    <td className={'checkbox'}>
                        <FormButton className={'btn cancel'}
                                    disabled={this.state.clicked}
                                    onClick={this.deleteHandler}
                        >
                            <i className={'fa fa-times'}/>
                        </FormButton>
                    </td>}
                </tr>
                { this.state.opened && mode !== 'add' &&
                (<tr>
                    <td className={'td-rounded'} colSpan={6}>
                        {windmill.descriptionUa}
                    </td>
                </tr>
                )}
            </React.Fragment>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: bindActionCreators(deleteWindmill, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(WindmillItem);