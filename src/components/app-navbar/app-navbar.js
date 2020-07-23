import React, {Component} from 'react';
import {Link, Switch, Route, withRouter} from "react-router-dom";
import AppNavbarItem from '../app-navbar-item'
import AppContent from "../app-content/appContent";
import AppContentProfile from "../app-content-profile/appContentProfile";
import AppContentWindmills from "../app-content-windmills/appContentWindmills";
import ProtectedRoute from "../protected-route/protected-route";
import { connect } from "react-redux";

import './app-navbar.css';
import AppContentDevice from "../app-content-device/app-content-device";

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {opened: true}
        this.navbarRef = React.createRef()
    }

    animationHandler = (e) => {
        if(this.state.opened) this.setState({opened: false})
        const nav = this.navbarRef.current
        nav.classList.toggle('closed')
    }

    transitionHandler = () => {
        if(!this.state.opened && !this.navbarRef.current.classList.contains('closed')) this.setState({opened: true})
    }

    render() {
        let { user } = this.props
        let { path, url } = this.props.match

        return (
            <React.Fragment>
                <ul ref={this.navbarRef} className="navbar" onTransitionEnd={this.transitionHandler}>
                    <li className={'nav-item'}>
                        <Link className={'nav-item-link'} to={`${url}/profile`}>
                            <AppNavbarItem ico={'fa fa-user-circle'}
                                           label={'Ваш профіль'}
                                           state={this.state.opened}
                            />
                        </Link>
                    </li>
                    {user.account?.permission === 3 && (<>
                        <li className={'nav-item'}>
                            <Link className={'nav-item-link'} to={`${url}/devices`}>
                                <AppNavbarItem ico={'fa fa-microchip'}
                                               label={'Ваші пристрої'}
                                               state={this.state.opened}
                                />
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link className={'nav-item-link'} to={`${url}/windmills`}>
                                <AppNavbarItem ico={'fa fa-snowflake-o'}
                                               label={'Ваші вітрогенератори'}
                                               state={this.state.opened}
                                />
                            </Link>
                        </li>
                    </>)}
                    <li className={'nav-item'}>
                        <i className={`fa fa-chevron-left nav-icon ${!this.state.opened ? 'rotated' : ''}`}
                           onClick={this.animationHandler}
                        />
                    </li>
                </ul>
                <Switch>
                    <ProtectedRoute
                        path={`${path}/profile`}
                        to={'/home'}
                    >
                        <AppContent>
                            <AppContentProfile/>
                        </AppContent>
                    </ProtectedRoute>
                    <ProtectedRoute
                        condition={user.account?.permission === 3}
                        path={`${path}/devices`}
                        to={'/home'}
                    >
                        <AppContent>
                            <AppContentDevice/>
                        </AppContent>
                    </ProtectedRoute>
                    <ProtectedRoute
                        condition={user.account?.permission === 3}
                        path={`${path}/windmills`}
                        to={'/home'}
                    >
                        <AppContent>
                            <AppContentWindmills mode={'view'}/>
                        </AppContent>
                    </ProtectedRoute>
                </Switch>
            </React.Fragment>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(withRouter(AppNavbar));

