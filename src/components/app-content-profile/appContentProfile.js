import React, {Component} from 'react';
import AppContentCard from "../app-content-card/appContentCard";
import './appContentProfile.css'

class AppContentProfile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { account } = this.props
        return (
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
}

export default AppContentProfile;