import React, {Component} from 'react';
import FormButton from "../../../form-button/form-button";
import ModalWindow from "../../../modal-window/modal-window";
import FormInput from "../../../form-input/form-input";
import api from "../../../../service/api";
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import {getUserDevices} from "../../../../redux/actions/deviceActions";
import { toast } from 'react-toastify';

class DeviceTitle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpened: false,
            deviceToken: ''
        }
    }

    clickHandler = (e) => {
        this.setState({modalIsOpened: !this.state.modalIsOpened})
    }

    changeHandle = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    submitHandler = () => {
        api.addDevice(this.state.deviceToken)
            .then(success => {
                toast("Девайс успішно доданий", {type: "success"})
                this.props.getUserDevices()
            })
            .catch(err => {
                toast(err.message, {type: "error"})
            })
    }

    render() {
        return (
            <React.Fragment>
                <span className={'title'}>Ваші девайси</span>
                <FormButton className={'btn add'}
                            onClick={this.clickHandler}
                            type={'button'}
                >
                    + Додати
                </FormButton>

                {this.state.modalIsOpened && (<ModalWindow>
                    <h2>Додати девайс:</h2>
                    <FormInput type="text"
                               name={'deviceToken'}
                               placeholder={'Token of your device'}
                               handler={this.changeHandle}
                               value={this.state.deviceToken}
                    />
                    <div className={'buttons-wrapper'}>
                        <FormButton className={'btn add'}
                                    onClick={this.submitHandler}
                        >
                            Ok
                        </FormButton>
                        <FormButton className={'btn cancel'}
                                    onClick={this.clickHandler}
                                    type={'button'}
                        >
                            Cancel
                        </FormButton>
                    </div>
                </ModalWindow>)}
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserDevices: bindActionCreators(getUserDevices, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(DeviceTitle);