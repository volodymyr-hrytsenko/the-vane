import React, {Component} from 'react';
import AppContentCard from "../app-content-card/appContentCard";
import './appContentProfile.css'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getUserInfo} from "../../redux/actions/userActions";
import {CircleLoader} from "react-spinners";
import Notification from "../notification/notification";
import {setTitleType} from "../../redux/actions/titleActions";
import AnemometrIcon from "./parts/anemometr/anemometr-icon";
import WindmillIcon from "./parts/windmill-icon/windmill-icon";
import UserIcon from "./parts/user-icon/user-icon";
import UserInfo from "../user-info/user-info";

class AppContentProfile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setTitleType('profile')
        this.props.getUserInfo()
    }

    render() {
        let {user} = this.props
        let { account } = this.props.user
        let comp;
        if(this.props.isPending) {
            comp = <CircleLoader css={'left: 50%; transform: translateX(-50%); margin-top: 15px'} size={'120px'}/>
        } else if(this.props.error) {
            comp = <Notification type={'error'}>{this.props.error.message}</Notification>
        } else {
            comp = (
                <>
                    <div className={'card_list'}>
                        <AppContentCard title={"Користувачів"}
                                        amount={account ? account.user : ''}
                                        icon={<AnemometrIcon/>}
                                        color={'green'}
                        />
                        <AppContentCard title={'Девайсів'}
                                        amount={account ? account.device : ''}
                                        icon={<WindmillIcon/>}
                                        color={'blue'}
                        />
                        <AppContentCard title={'Вітряків'}
                                        amount={account ? account.windmill : ''}
                                        icon={<UserIcon/>}
                                        color={'orange'}
                        />
                    </div>
                    <UserInfo fields={["Ім'я", "Прізвище", "Адреса електронної пошти"]}
                              infos={[user.name, user.surname, user.email]}
                    />
                </>
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