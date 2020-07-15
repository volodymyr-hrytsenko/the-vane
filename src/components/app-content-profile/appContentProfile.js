import React, {Component} from 'react';
import AppContentCard from "../app-content-card/appContentCard";
import './appContentProfile.css'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getUserInfo} from "../../redux/actions/userActions";
import {CircleLoader} from "react-spinners";
import Notification from "../notification/notification";
import {setTitleType} from "../../redux/actions/titleActions";

class AppContentProfile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setTitleType('profile')
        sessionStorage.setItem('token', 'ac1d73db-6455-4b8b-8c8f-fa5346e4739b')
        this.props.getUserInfo()
    }

    render() {
        let { account } = this.props.user
        let comp;
        if(this.props.isPending) {
            comp = <CircleLoader/>
        } else if(this.props.error) {
            comp = <Notification type={'error'}>{this.props.error.message}</Notification>
        } else {
            comp = (
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
            );
        }
        return comp
    }
}

const mapStateToProps = (state) => {
    return {
        isPending: state.userReducer.userInfoPending,
        user: state.userReducer.user,
        error: state.userReducer.userError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: bindActionCreators(getUserInfo, dispatch),
        setTitleType: bindActionCreators(setTitleType, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentProfile);