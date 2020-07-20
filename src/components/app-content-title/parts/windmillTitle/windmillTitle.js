import React, {Component} from 'react';
import './windmillTitle.css'
import ModalWindow from "../../../modal-window/modal-window";
import AppContentWindmills from "../../../app-content-windmills/appContentWindmills";
import FormButton from "../../../form-button/form-button";
import {connect} from "react-redux";
import api from "../../../../service/api";
import {bindActionCreators} from "redux";
import {clearTemp} from "../../../../redux/actions/windmillTempAction";
import {windmillTempReducer} from "../../../../redux/reducers/windmillTempReducer";
import {addWindmills} from "../../../../redux/actions/windmillActions";

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
                this.props.addWindmills(this.props.temporaryWindmills)
                this.props.clearTemp()
                this.setState({modalIsOpened: false})
            }).catch(err => {
                console.log(err)
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
        addWindmills: bindActionCreators(addWindmills, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WindmillTitle);