import React, {Component} from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {email, required} from "../../service/validators";
import {CircleLoader} from "react-spinners";
import {Redirect} from "react-router";
import Notification from "../notification/notification";
import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";

import './registration.css'
import {registerClear, registerUser} from "../../redux/actions/registrationActions";
import RedirectLink from "../redirect-link/redirect-link";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        this.props.registerClear()
    }

    changeHandle = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.registerUser(this.state)
    };

    render() {
        return (
            <div className={'sign-up-wrapper'}>
                <form className={'sign-up-form'}
                      onSubmit={this.onSubmit}
                >
                    <div className={'header-wrapper'}>
                        <h1>Реєстрація</h1>
                    </div>
                    {this.props.registrationSucceed && <Redirect to={'home'}/>}
                    {this.props.error && <Notification type={'error'}>{this.props.error.message}</Notification>}
                    <label className={'sing-up-label'}>Name</label>
                    <FormInput type="text"
                               name={'name'}
                               placeholder={'Name'}
                               handler={this.changeHandle}
                               value={this.state.name}
                               validate={[required]}
                    />
                    <label className={'sing-up-label'}>Surname</label>
                    <FormInput type="text"
                               name={'surname'}
                               placeholder={'Surname'}
                               handler={this.changeHandle}
                               value={this.state.surname}
                               validate={[required]}
                    />
                    <label className={'sing-up-label'}>Email</label>
                    <FormInput type="text"
                               name={'email'}
                               placeholder={'Email'}
                               handler={this.changeHandle}
                               value={this.state.email}
                               validate={[email, required]}
                    />
                    <label className={'sing-up-label'}>Password</label>
                    <FormInput type="password"
                               name={'password'}
                               placeholder={'Password'}
                               handler={this.changeHandle}
                               value={this.state.password}
                               validate={[required]}
                    />
                    <FormButton className={'btn confirm'} type={'submit'}>
                        Submit
                    </FormButton>
                    <RedirectLink link={'/login'}>До входу</RedirectLink>
                    <CircleLoader
                        css={'left: 50%; transform: translateX(-50%);'}
                        size={60}
                        color={'#624fbf'}
                        loading={this.props.isPending}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.registrationReducer.error,
        isPending: state.registrationReducer.registerIsPending,
        registrationSucceed: state.registrationReducer.registrationSucceed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: bindActionCreators(registerUser, dispatch),
        registerClear: bindActionCreators(registerClear, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);