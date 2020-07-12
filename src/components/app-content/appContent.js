import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {getUserInfo} from "../../redux/actions/userActions";
import AppContentTitle from "../app-content-title/appContentTitle";
import AppContentCard from "../app-content-card/appContentCard";
import './appContent.css'


class AppContent extends Component {
    componentDidMount() {
        sessionStorage.setItem('token', 'b0a7a524-bfe1-4e2b-9276-b78349c23d29')
        this.props.getUserInfo()
    }

    render() {

        let {account} = this.props.user

        return (
            <div className={"content"}>
                <AppContentTitle/>
                <div className={'card_list'}>
                    <AppContentCard title={"Користувачів"}
                                    amount={account ? account.user : ''}
                    />
                    <AppContentCard title={'Девайсів'}
                                    amount={account ? account.device : ''}
                    />
                    <AppContentCard title={'Вітряків'}
                                    amount={account ? account.windmill : ''}
                    />
                </div>
            </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(AppContent);