import React, {Component} from 'react';
import Battery from "../battery/battery";
import moment from "moment";
import {findMax} from "../../service/utilities";
import {bindActionCreators} from "redux";
import {setActiveWindmill} from "../../redux/actions/windmillTempAction";
import { connect } from "react-redux";
import {withRouter} from "react-router";

class MainItem extends Component {
    componentDidMount() {
        this.max = findMax(Object.entries(this.props.device.windmills))
    }

    clickHandler = () => {
        this.props.setActiveWindmill(this.max.id)
        this.props.history.push('/user/windmills')
    }

    render() {
        let { device } = this.props
        let max = findMax(Object.entries(device.windmills))
        return (
            <tr>
                <td className={'td-right'}>{device.token}</td>
                <td>
                    <div className={'td-centered'}>
                        <Battery level={device.battery}/>
                        <span className={'battery-level'}>{device.battery} %</span>
                    </div>
                </td>
                <td>{moment(device.updated).format("DD.MM.YYYY")}</td>
                <td className={'td-left clickable'} onClick={this.clickHandler}>
                    {max.power} кв/год
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveWindmill: bindActionCreators(setActiveWindmill, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(withRouter(MainItem));