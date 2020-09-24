import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setTitleType} from "../../redux/actions/titleActions";
import {getDiagramsData} from "../../redux/actions/diagramsActions";
import {getUserDevices} from "../../redux/actions/deviceActions";
import Graph from "../graph/Graph";
import './app-content-diagram.css'
import moment from "moment";

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
    }

    deviceSelect = (e) => {
        this.setState({
            windmills: this.props.diagramsData[e.target.value]?.windmills || {},
            deviceValue: e.target.value,
            windmillValue: ''
        })
    }

    windmillSelect = (e) => {
        this.setState({
            windmillData: e.target.value,
            windmillValue: ''
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
        return (
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
                        <select value={this.state.windmillData}
                                className={'diagram-select'}
                                name={'windmill'}
                                onChange={this.windmillSelect}
                        >
                            <option value={'[]'}/>
                            {Object.values(this.state.windmills).map((windmill, ind) => {
                                return (
                                    <option key={ind}
                                            value={JSON.stringify(windmill)}
                                    >
                                        {ind}
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
}


const mapStateToProps = (state) => {
    return {
        diagramsData: state.diagramsReducer.diagramsData,
        devices: state.devicesReducer.devices,
        isPending: state.diagramsReducer.isPending,
        error: state.diagramsReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTitleType: bindActionCreators(setTitleType, dispatch),
        getDiagramsData: bindActionCreators(getDiagramsData, dispatch),
        getUserDevices: bindActionCreators(getUserDevices, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentDiagram);