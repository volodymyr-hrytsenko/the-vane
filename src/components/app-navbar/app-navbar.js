import React, {Component} from 'react';
import {Link, Switch, Route, withRouter} from "react-router-dom";
import AppNavbarItem from '../app-navbar-item'
import AppContent from "../app-content/appContent";
import AppContentProfile from "../app-content-profile/appContentProfile";
import AppContentWindmills from "../app-content-windmills/appContentWindmills";

import './app-navbar.css';
import ProtectedRoute from "../protected-route/protected-route";

class AppNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {path, url} = this.props.match
        const list = [
            {id: 'lkja', ico: 'fa fa-user-circle', label: 'Ваш профіль', path: 'profile'},
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
                <ul className="navbar">
                    {navbarItem}
                </ul>
                <Switch>
                    <ProtectedRoute path={`${path}/profile`}>
                        <AppContent>
                            <AppContentProfile/>
                        </AppContent>
                    </ProtectedRoute>
                    <ProtectedRoute path={`${path}/devices`}>
                        <p>----PLACEHOLDER----</p>
                    </ProtectedRoute>
                    <ProtectedRoute path={`${path}/windmills`}>
                        <AppContent>
                            <AppContentWindmills/>
                        </AppContent>
                    </ProtectedRoute>
                </Switch>
            </React.Fragment>
        );
    }
}


export default withRouter(AppNavbar);

