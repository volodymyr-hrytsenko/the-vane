import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import LandingPage from "../landing-page";
import AppContainer from "../app-container";
import AppHeaderLogo from "../app-header-logo";

import './app-header-menu.css'

const AppHeaderMenu = () => {
    return(
        <Router>
            <div className="header__menu">
                <Link to={'/home'}><AppHeaderLogo/></Link>
                <div className={'links'}>
                    <Link className={'link m15'} to={'/home'}>Головна</Link>
                    <Link className={'link m15'} to={'/home'}>Послуги</Link>
                    <Link className={'link m15'} to={'/home'}>Про нас</Link>
                    <Link className={'link m15'} to={'/home'}>Контакти</Link>
                    <Link className={'link m15'} to={'/user'}>Вхід</Link>
                </div>
            </div>
            <Switch>
                <Route path={'/home'}>
                    <LandingPage />
                </Route>
                <Route path={'/user'}>
                    <AppContainer />
                </Route>
                <Route path={''}>
                    <Redirect to={'/home'}/>
                </Route>
            </Switch>
        </Router>

    )
}

export default AppHeaderMenu; 