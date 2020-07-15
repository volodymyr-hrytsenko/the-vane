import React, {Component} from 'react';
import './windmillItem.css'

class WindmillItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        }
    }

    render() {
        let { windmill } = this.props
        return (
            <React.Fragment>
                <tr onClick={() => {this.setState({opened: !this.state.opened})}}>
                    <td className={'td-right'}>{windmill.titleUa}</td>
                    <td>{windmill.bladesCount}</td>
                    <td>{windmill.bladesLength}</td>
                    <td>{windmill.startSpeed} м/с</td>
                    <td>{windmill.nominalSpeed} м/с</td>
                    <td className={'td-left'}>{windmill.nominalVoltage} В</td>
                </tr>
                { this.state.opened &&
                (<tr>
                        <td className={'td-rounded'} colSpan={6}>
                            {windmill.descriptionUa}
                        </td>
                    </tr>
                )}
            </React.Fragment>

        );
    }
}

export default WindmillItem;