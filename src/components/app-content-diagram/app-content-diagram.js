import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setTitleType} from "../../redux/actions/titleActions";
import {getDiagramsData} from "../../redux/actions/diagramsActions";
import {getUserDevices} from "../../redux/actions/deviceActions";
import {getWindmillsByUser} from "../../redux/actions/windmillActions";
import moment from "moment";
import {CircleLoader} from "react-spinners";
import Notification from "../notification/notification";
import Graph from "../graph/Graph";
import './app-content-diagram.css'

class AppContentDiagram extends Component {
    constructor(props) {
        super(props);
        this.amounts = [3, 5, 10]
        this.state = {
            windmills: {},
            windmillData: '[]',
            deviceValue: '',
            windmillValue: '',
            infoAmount: 5
        }
    }

    componentDidMount() {
        this.props.setTitleType('diagram')
        this.props.getDiagramsData(this.state.infoAmount)
        this.props.getUserDevices()
        this.props.getWindmillsByUser()
        console.log(this.props)
    }

    deviceSelect = (e) => {
        this.setState({
            windmills: this.props.diagramsData[e.target.value]?.windmills || {},
            deviceValue: e.target.value,
            windmillValue: '',
            windmillData: '[]'
        })
    }

    windmillSelect = (e) => {
        this.setState({
            windmillData: e.target.value,
            windmillValue: e.target.value
        })
    }

    buttonHandler = (num) => {
        this.props.getDiagramsData(num)
        this.setState({
            infoAmount: num,
            deviceValue: '',
            windmillValue: '',
            windmillData: '[]'
        })
    }

    formateData = () => {
        let data = JSON.parse(this.state.windmillData)
        return data.map(data => {
            return {power: data.power, date: moment(data.date).format("DD.MM.YYYY")}
        })
    }

    render() {
        let comp;
        if(this.props.isPending) {
            comp = <CircleLoader css={'left: 50%; transform: translateX(-50%); margin-top: 15px'} size={'120px'}/>
        } else if(this.props.error) {
            comp = <Notification type={'error'}>{this.props.error.message}</Notification>
        } else {
            comp = (
                <div className={'diagram-wrapper'}>
                    <form className={'diagram-form'}>
                        <div className={'select-wrapper'}>
                            <label className={"diagram-label"}
                                   htmlFor={'device'}
                            >
                                Оберіть девайс
                            </label>
                            <select value={this.state.deviceValue}
                                    className={'diagram-select'}
                                    name={'device'}
                                    onChange={this.deviceSelect}
                            >
                                <option value={{}}/>
                                {this.props.devices.map(device => {
                                    return (<option key={device.id} value={device.id}>{device.token}</option>)
                                })}
                            </select>
                        </div>
                        <div className={'select-wrapper'}>
                            <label className={"diagram-label"}
                                   htmlFor={'windmill'}
                            >
                                Оберіть вітряк
                            </label>
                            <select value={this.state.windmillValue}
                                    className={'diagram-select'}
                                    name={'windmill'}
                                    onChange={this.windmillSelect}
                            >
                                <option value={''}/>
                                {Object.entries(this.state.windmills).map((windmillData) => {
                                    return (
                                        <option key={windmillData[0]}
                                                value={JSON.stringify(windmillData[1])}
                                        >
                                            {this.props.windmills.filter((windmill) => windmill.id === +windmillData[0])[0].titleUa}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </form>
                    <div className={'graph-wrapper'}>
                        <Graph data={this.formateData()}/>
                        <div className={'buttons'}>
                            {this.amounts.map(amount => {
                                return (<button
                                    className={`info-amount ${this.state.infoAmount === amount ? 'active-btn' : ''}`}
                                    onClick={() => this.buttonHandler(amount)}
                                >
                                    {amount}
                                </button>)
                            })}
                        </div>
                    </div>
                </div>
            );
        }
        return comp
    }
}


const mapStateToProps = (state) => {
    return {
        diagramsData: state.diagramsReducer.diagramsData,
        devices: state.devicesReducer.devices,
        isPending: state.diagramsReducer.isPending,
        error: state.diagramsReducer.error,
        windmills: state.windmillsReducer.windmills,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTitleType: bindActionCreators(setTitleType, dispatch),
        getDiagramsData: bindActionCreators(getDiagramsData, dispatch),
        getUserDevices: bindActionCreators(getUserDevices, dispatch),
        getWindmillsByUser: bindActionCreators(getWindmillsByUser, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentDiagram);