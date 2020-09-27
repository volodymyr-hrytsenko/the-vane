import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import LandingPage from "../landing-page";
import AppContainer from "../app-container";
import AppHeaderLogo from "../app-header-logo";
import LoginForm from "../login-form/login-form";
import ProtectedRoute from "../protected-route/protected-route";
import Registration from "../registration/registration";
import { connect } from "react-redux";

import './app-header-menu.css'
import {bindActionCreators} from "redux";
import {logOut} from "../../redux/actions/userActions";

class AppHeaderMenu extends Component {

    clickHandler = (e) => {
        sessionStorage.clear()
        this.props.logOut()
    }

    defineLinks() {
        return this.props.isLoggedIn ?
            (<>
                <Link className={'link m15'} to={`/user/main`}>Мій профіль</Link>
                <span className={'link m15'} onClick={this.clickHandler}>Вийти</span>
            </>) :
            (<>
                <Link className={'link m15'} to={'/login'}>Вхід</Link>
            </>)
    }

    render() {
        let {title} = this.props
        return (
            <Router>
                <div className="header__menu" style={{position: title === 'main-page' ? 'absolute' : 'relative'}}>
                    {/* box */}
                    <Link className={'logo-link'}
                          to={'/home'}
                    >
                        <AppHeaderLogo/>
                    </Link>
                    <div className={'links'}>
                        <Link className={'link m15'} to={'/home'}>Головна</Link>
                        <Link className={'link m15'} to={'/home'}>Послуги</Link>
                        <Link className={'link m15'} to={'/home'}>Про нас</Link>
                        <Link className={'link m15'} to={'/home'}>Контакти</Link>
                        {this.defineLinks()}
                    </div>
                </div>
                <Switch>
                    <Route path={'/home'}>
                        <LandingPage/>
                    </Route>
                    <ProtectedRoute
                        path={'/user'}
                        to={'/home'}
                    >
                        <AppContainer/>
                    </ProtectedRoute>
                    <Route path={'/login'}>
                        <LoginForm/>
                    </Route>
                    <Route path={'/registration'}>
                        <Registration/>
                    </Route>
                    <Route path={''}>
                        <Redirect to={'/home'}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.userReducer.isLoggedIn,
        user: state.userReducer.user,
        title: state.titleReducer.titleType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: bindActionCreators(logOut, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderMenu);