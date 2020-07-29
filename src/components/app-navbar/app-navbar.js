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
        const list = [
            {id: 'lkja', ico: 'fa fa-user-circle', label: 'Головна', path: 'profile'},
            {id: 'ldfa', ico: 'fa fa-microchip', label: 'Ваші пристрої', path: 'devices'},
            {id: 'ljha', ico: 'fa fa-snowflake-o', label: 'Ваші вітрогенератори', path: 'windmills'},
            {id: 'sgsr', ico: 'fa fa-chevron-left', path: 'profile'}
        ];

        const navbarItem = list.map(item => {
            const {id, path, ...listProps} = item
            return(
                <li className={'nav-item'} key={id}>
                    <Link className={'nav-item-link'} to={`${url}/${path}`}>
                        <AppNavbarItem {...listProps}/>
                    </Link>
                </li>
            );
        });

        return (
            <React.Fragment>
                <ul ref={this.navbarRef} className="navbar" onTransitionEnd={this.transitionHandler}>
                    {navbarItem}
                    <li className={'nav-item'}>
                        <i className={'fa fa-chevron-left nav-icon'} onClick={this.animationHandler}/>
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

