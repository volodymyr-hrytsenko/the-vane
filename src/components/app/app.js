import React, {Component} from 'react';

import AppHeaderMenu from "../app-header-menu";
import {bindActionCreators} from "redux";
import {setLoggedIn} from "../../redux/actions/userActions";
import {connect} from "react-redux";

class App extends Component {
    componentDidMount() {
        if(sessionStorage.token) this.props.setLoggedIn()
    }

    render() {
        return (
            <div className="app">
                <AppHeaderMenu/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: bindActionCreators(setLoggedIn, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(App)