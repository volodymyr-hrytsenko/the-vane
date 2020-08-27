import React, {Component} from 'react';
import './windmillTitle.css'
import ModalWindow from "../../../modal-window/modal-window";
import AppContentWindmills from "../../../app-content-windmills/appContentWindmills";
import FormButton from "../../../form-button/form-button";
import {connect} from "react-redux";
import api from "../../../../service/api";
import {bindActionCreators} from "redux";
import {clearTemp} from "../../../../redux/actions/windmillTempAction";
import {getWindmillsByUser} from "../../../../redux/actions/windmillActions";
import {toast} from "react-toastify";

class WindmillTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpened: false
        }
    }

    clickHandler = (e) => {
        this.setState({modalIsOpened: !this.state.modalIsOpened})
    }

    submitHandler = () => {
        const ids = this.props.temporaryWindmills.map(windmill => windmill.id)
        api.addUserWindmill(ids)
            .then(success => {
                toast("Девайс успішно доданий", {type: "success"})
                this.props.getWindmillsByUser()
                this.props.clearTemp()
                this.setState({modalIsOpened: false})
            }).catch(err => {
                toast(err.message, {type: "error"})
            })
    }

    render() {
        return (
            <React.Fragment>
                <span className={'title'}>Ваші вітряки</span>
                <FormButton className={'btn add'}
                            onClick={this.clickHandler}
                            type={'button'}
                >
                    + Додати
                </FormButton>

                {this.state.modalIsOpened && (<ModalWindow>
                    <h2>Додати вітряки:</h2>
                    <div className={'windmill-wrapper'}>
                        <AppContentWindmills mode={'add'}/>
                    </div>
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

const mapStateToProps = (state) => {
    return {
        temporaryWindmills: state.windmillTempReducer.temporaryWindmills
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearTemp: bindActionCreators(clearTemp, dispatch),
        getWindmillsByUser: bindActionCreators(getWindmillsByUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WindmillTitle);