import React, {Component} from 'react';
import {connect} from "react-redux";
import {isEmpty} from "../../../../service/utilities";

class UserTitle extends Component {
    render() {
        let {user} = this.props
        if(isEmpty(user)) return null
        return (
             <React.Fragment>
                <span className={'title'}>{ `${user.name} ${user.surname}` }</span>
                <span className={'title'}>{ `${user.email}` }</span>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(UserTitle);