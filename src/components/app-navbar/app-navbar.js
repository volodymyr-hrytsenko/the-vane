import React, {Component} from 'react';
import {Link, Switch, withRouter} from "react-router-dom";
import AppNavbarItem from '../app-navbar-item'
import AppContent from "../app-content/appContent";
import AppContentProfile from "../app-content-profile/appContentProfile";
import AppContentWindmills from "../app-content-windmills/appContentWindmills";
import ProtectedRoute from "../protected-route/protected-route";
import { connect } from "react-redux";

import './app-navbar.css';
import AppContentDevice from "../app-content-device/app-content-device";
import AppContentMain from "../app-content-main/appContentMain";
import AppContentDiagram from "../app-content-diagram/app-content-diagram";

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
        let { user, type } = this.props
        let { path, url } = this.props.match
        return (
            <React.Fragment>
                <ul ref={this.navbarRef} className="navbar" onTransitionEnd={this.transitionHandler}>
                    <li className={`nav-item ${type === 'main' ? 'active' : ''}`}>
                        <Link className={'nav-item-link'} to={`${url}/main`}>
                            <AppNavbarItem ico={'fa fa-home'}
                                           label={'Головна'}
                                           state={this.state.opened}
                            />
                        </Link>
                    </li>
                    <li className={`nav-item ${type === 'profile' ? 'active' : ''}`}>
                        <Link className={'nav-item-link'} to={`${url}/profile`}>
                            <AppNavbarItem ico={'fa fa-user-circle'}
                                           label={'Профіль'}
                                           state={this.state.opened}
                            />
                        </Link>
                    </li>
                    {user.account?.permission === 3 && (<>
                        <li className={`nav-item ${type === 'devices' ? 'active' : ''}`}>
                            <Link className={'nav-item-link'} to={`${url}/devices`}>
                                <AppNavbarItem ico={'fa fa-microchip'}
                                               label={'Пристрої'}
                                               state={this.state.opened}
                                />
                            </Link>
                        </li>
                        <li className={`nav-item ${type === 'windmill' ? 'active' : ''}`}>
                            <Link className={'nav-item-link'} to={`${url}/windmills`}>
                                <AppNavbarItem ico={'fa fa-bolt'}
                                               label={'Вітрогенератори'}
                                               state={this.state.opened}
                                />
                            </Link>
                        </li>
                        <li className={`nav-item ${type === 'diagram' ? 'active' : ''}`}>
                            <Link className={'nav-item-link'} to={`${url}/diagram`}>
                                <AppNavbarItem ico={'fa fa-line-chart'}
                                               label={'Діаграми'}
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
                    <ProtectedRoute
                        condition={user.account?.permission === 3}
                        path={`${path}/main`}
                        to={'/home'}
                    >
                        <AppContent>
                            <AppContentMain/>
                        </AppContent>
                    </ProtectedRoute>
                    <ProtectedRoute
                        condition={user.account?.permission === 3}
                        path={`${path}/diagram`}
                        to={'/home'}
                    >
                        <AppContent>
                            <AppContentDiagram/>
                        </AppContent>
                    </ProtectedRoute>
                </Switch>
            </React.Fragment>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        type: state.titleReducer.titleType
    }
}

export default connect(mapStateToProps)(withRouter(AppNavbar));

