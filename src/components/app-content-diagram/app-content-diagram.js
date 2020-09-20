import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setTitleType} from "../../redux/actions/titleActions";
import {getDiagramsData} from "../../redux/actions/diagramsActions";
import {getUserDevices} from "../../redux/actions/deviceActions";
import Graph from "../graph/Graph";

class AppContentDiagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windmills: {},
            windmillData: '[]',
            deviceValue: '',
            windmillValue: ''
        }
    }

    componentDidMount() {
        this.props.setTitleType('diagram')
        this.props.getDiagramsData()
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
            windmillValue: '1'
        })
    }

    render() {
        return (
            <div>
                <form>
                    <select value={this.state.deviceValue}
                            className={'devices-select'}
                            onChange={this.deviceSelect}
                    >
                        <option value={{}}/>
                        {this.props.devices.map(device => {
                            return (<option key={device.id} value={device.id}>{device.token}</option>)
                        })}
                    </select>
                    <select value={this.state.windmillData}
                            className={'windmills-select'}
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
                </form>
                <Graph data={JSON.parse(this.state.windmillData)}/>
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