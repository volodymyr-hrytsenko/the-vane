import React, {Component} from 'react';
import './windmillItem.css'

class WindmillItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { windmill } = this.props
        return (
            <tr>
                <td className={'td-right'}>{windmill.titleUa}</td>
                <td>{windmill.bladesCount}</td>
                <td>{windmill.bladesLength}</td>
                <td>{windmill.startSpeed} м/с</td>
                <td>{windmill.nominalSpeed} м/с</td>
                <td className={'td-left'}>{windmill.nominalVoltage} В</td>
            </tr>
        );
    }
}

export default WindmillItem;