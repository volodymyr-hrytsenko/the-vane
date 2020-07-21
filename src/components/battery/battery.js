import React, {Component} from 'react';
import './battery.css'

class Battery extends Component {
    render() {
        let additionalClass
        if(this.props.level > 67) {
            additionalClass = 'high'
        } else if(this.props.level > 33) {
            additionalClass = 'medium'
        } else {
            additionalClass = 'low'
        }
        return (
            <div className="batteryContainer">
                <div className="batteryOuter">
                    <div className={`batteryLevel ${additionalClass}`} style={{width: `${this.props.level}%`}}/>
                </div>
                <div className="batteryBump"/>
            </div>
        );
    }
}

export default Battery;