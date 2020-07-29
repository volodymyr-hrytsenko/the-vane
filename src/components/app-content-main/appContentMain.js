import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {setTitleType} from "../../redux/actions/titleActions";
import {connect} from "react-redux";
import {CircleLoader} from "react-spinners";
import Notification from "../notification/notification";
import {getWindmillData} from "../../redux/actions/windmillActions";
import MainItem from "../main-item/mainItem";
import '../../css/table.css'

class AppContentMain extends Component {
    componentDidMount() {
        this.props.setTitleType('main')
        this.props.getWindmillData()
    }

    render() {
        let {windmillData} = {...this.props}
        let comp;
        if(this.props.isPending) {
            comp = <CircleLoader css={'left: 50%; transform: translateX(-50%); margin-top: 15px'} size={'120px'}/>
        } else if(this.props.error) {
            comp = <Notification type={'error'}>{this.props.error.message}</Notification>
        } else {
            comp =(<table>
                <thead>
                <tr>
                    <th>Назва</th>
                    <th>Заряд аккамулятора</th>
                    <th>Дата Оновлення</th>
                    <th>Найбільша кількість енергії</th>
                </tr>
                </thead>

                <tbody>
                    {Object.values(windmillData).map(device => {
                        return (
                            <MainItem
                                key={device.token}
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
        windmillData: state.windmillsReducer.windmillData,
        isPending: state.windmillsReducer.windmillDataIsPending,
        error: state.windmillsReducer.windmillDataError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTitleType: bindActionCreators(setTitleType, dispatch),
        getWindmillData: bindActionCreators(getWindmillData, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContentMain);