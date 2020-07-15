import React, {Component} from 'react';
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";

class ProtectedRoute extends Component {
    render() {
        return (
            <Route {...this.props}>
                { this.props.isLoggedIn ? (this.props.children) : (<Redirect to={'/home'}/>)}
            </Route>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.userReducer.isLoggedIn,
    }
};

export default connect(mapStateToProps)(ProtectedRoute);