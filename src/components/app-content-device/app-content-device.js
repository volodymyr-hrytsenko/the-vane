import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {getUserDevices} from "../../redux/actions/deviceActions";
import {setTitleType} from "../../redux/actions/titleActions";
import {CircleLoader} from "react-spinners";
import Notification from "../notification/notification";
import DeviceItem from "../device_item/device-item";
import '../../css/table.css'

class AppContentDevice extends Component {

    componentDidMount() {
        this.props.setTitleType('devices')
        this.props.getUserDevices()
    }

    render() {
        let {devices} = {...this.props}
        let comp;
        if(this.props.isPending) {
            comp = <CircleLoader css={'left: 50%; transform: translateX(-50%); margin-top: 15px'} size={'120px'}/>
        } else if(this.props.error) {
            comp = <Notification type={'error'}>{this.props.error.message}</Notification>
        } else {
            comp =(<table className={'windmills-list'}>
                <thead>
                <tr>
                    <th>Назва</th>
                    <th>Заряд аккамулятора</th>
                    <th>Дата Оновлення</th>
                    <th/>
                </tr>
                </thead>

                <tbody>
                    {devices.map((device, ind) => {
                        return (
                            <DeviceItem
                                key={ind}
                                device={device}
                            />
                        )
                    })}
                </tbody>
            </table>)
        }
        return comp
    }
}

const mapStateToProps = (state) => {
    return {
        devices: state.devicesReducer.devices,
        isPending: state.devicesReducer.isPending,
        error: state.devicesReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTitleType: bindActionCreators(setTitleType, dispatch),
        getUserDevices: bindActionCreators(getUserDevices, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentDevice);