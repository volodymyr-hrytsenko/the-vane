import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import LandingPage from "../landing-page";
import AppContainer from "../app-container";

import './app-header-menu.css'
import AppHeaderLogo from "../app-header-logo";


const AppHeaderMenu = () => {
    return(
        <Router>
            <div className="header__menu">
                <Link to={'/home'}><AppHeaderLogo/></Link>
                <div className={'links'}>
                    <Link className={'link'} to={'/home'}>Головна</Link>
                    <Link className={'link'} to={'/home'}>Послуги</Link>
                    <Link className={'link'} to={'/home'}>Про нас</Link>
                    <Link className={'link'} to={'/home'}>Контакти</Link>
                    <Link className={'link'} to={'/user'}>Вхід</Link>
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