import React, {Component} from "react";
import {CircleLoader} from "react-spinners";
import {login} from "../../redux/actions/userActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";
import Notification from "../notification/notification";
import {Redirect} from "react-router";
import './login-form.css'
import RedirectLink from "../redirect-link/redirect-link";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
    };

    changeHandle = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    };

    render() {
        return (
            <div className='login'>
                {this.props.isLoggedIn && <Redirect to={'user/profile'}/>}
                <div className='wrapper'>
                    <div className='block-login card'>
                        <div className='login-form-wrapper'>
                            <h1 className={'login-header'}>Вхід</h1>
                            {this.props.error && <Notification type={'error'}>{this.props.error.message}</Notification>}
                            <form name='loginForm'
                                  className='login-form'
                                  onSubmit={this.onSubmit}
                            >
                                <label htmlFor="email"
                                       className='label'
                                >
                                    Email:
                                </label>
                                <FormInput type="text"
                                           name={'email'}
                                           placeholder={'Email'}
                                           handler={this.changeHandle}
                                           value={this.state.email}
                                />
                                <label htmlFor='password'
                                       className='label'
                                >
                                    Password:
                                </label>
                                <FormInput type="password"
                                           name={'password'}
                                           placeholder={'Password'}
                                           handler={this.changeHandle}
                                           value={this.state.password}
                                />
                                <FormButton className={'btn confirm'} type={'submit'}>
                                    Submit
                                </FormButton>
                            </form>
                            <RedirectLink link={'/registration'}>До реєстрайції</RedirectLink>
                            <CircleLoader
                                css={'left: 50%; transform: translateX(-50%);'}
                                size={60}
                                color={'#624fbf'}
                                loading={this.props.loginPending}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginPending: state.userReducer.loginPending,
        error: state.userReducer.loginError,
        isLoggedIn: state.userReducer.isLoggedIn
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)