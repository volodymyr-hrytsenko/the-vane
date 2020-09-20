import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot} from "recharts";

class Graph extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <LineChart width={800}
                       height={500}
                       data={this.props.data}
                       margin={{top: 15, right: 5, left: 20, bottom: 15}}
            >
                <CartesianGrid strokeDasharray={'3 3'}/>
                <XAxis dataKey={'date'}/>
                <YAxis/>
                <Tooltip/>
                <Line type={'monotone'}
                      dataKey={'power'}
                      stroke="#8884d8"
                      activeDot={{r: 8}}
                      dot={true}
                />
            </LineChart>
        );
    }
}

export default Graph;