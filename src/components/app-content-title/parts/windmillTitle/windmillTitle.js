import React, {Component} from 'react';
import './windmillTitle.css'
import ModalWindow from "../../../modal-window/modal-window";
import AppContentWindmills from "../../../app-content-windmills/appContentWindmills";
import FormButton from "../../../form-button/form-button";

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

export default WindmillTitle;