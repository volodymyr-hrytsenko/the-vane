import React, {Component} from 'react';
import {Link, Switch, Route, withRouter} from "react-router-dom";
import AppNavbarItem from '../app-navbar-item'
import AppContent from "../app-content/appContent";
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {getUserInfo} from "../../redux/actions/userActions";
import AppContentProfile from "../app-content-profile/appContentProfile";
import AppContentWindmills from "../app-content-windmills/appContentWindmills";

import './app-navbar.css';

class AppNavbar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        sessionStorage.setItem('token', 'ac1d73db-6455-4b8b-8c8f-fa5346e4739b')
        this.props.getUserInfo()
    }

    render() {
        let {path, url} = this.props.match
        const list = [
            {id: 'lkja', ico: 'fa fa-user-circle', label: 'Головна', path: 'profile'},
            {id: 'ldfa', ico: 'fa fa-microchip', label: 'Ваші пристрої', path: 'devices'},
            {id: 'ljha', ico: 'fa fa-snowflake-o', label: 'Ваші вітрогенератори', path: 'windmills'},
            {id: 'sgsr', ico: 'fa fa-chevron-left', path: 'profile'}
        ];

        const navbarItem = list.map(item => {
            const {id, path, ...listProps} = item
            return(
                <li key={id}>
                    <Link to={`${url}/${path}`}>
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
                    <Route path={`${path}/profile`}>
                        <AppContent>
                            <AppContentProfile account={this.props.user.account}/>
                        </AppContent>
                    </Route>
                    <Route path={`${path}/devices`}>
                        <p>----PLACEHOLDER----</p>
                    </Route>
                    <Route path={`${path}/windmills`}>
                        <AppContent>
                            <AppContentWindmills/>
                        </AppContent>
                    </Route>
                </Switch>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isPending: state.userReducer.isPending,
        user: state.userReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: bindActionCreators(getUserInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppNavbar));

