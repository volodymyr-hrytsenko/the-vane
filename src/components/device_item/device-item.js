import React, {Component} from 'react';
import FormButton from "../form-button/form-button";
import api from "../../service/api";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {deleteDevice} from "../../redux/actions/deviceActions";
import moment from "moment";
import '../../css/table.css'
import './device-item.css'
import Battery from "../battery/battery";

class DeviceItem extends Component {
    deleteHandler = (e) => {
        api.deleteDevice(this.props.device.token)
            .then(success => {
                this.props.delete(this.props.device.token)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        let { device } = this.props
        return (
            <tr>
                <td className={'td-right'}>{device.token}</td>
                <td>
                    <div className={'td-centered'}>
                        <Battery level={device.battery}/>
                        <span className={'battery-level'}>{device.battery} %</span>
                    </div>
                </td>
                <td className={'td-left'}>{moment(device.updated).format("DD.MM.YYYY kk:mm:ss")}</td>
                <td className={'checkbox'}>
                    <FormButton className={'btn cancel'}
                                onClick={this.deleteHandler}
                    >
                        <i className={'fa fa-times'}/>
                    </FormButton>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: bindActionCreators(deleteDevice, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(DeviceItem);