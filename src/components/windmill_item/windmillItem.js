import React, {Component} from 'react';
import './windmillItem.css'
import FormCheckbox from "../form-checkbox/form-checkbox";
import FormButton from "../form-button/form-button";

class WindmillItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        }
    }

    clickHandler = (e) => {
        if (e.target.tagName === 'BUTTON') return
        this.setState({opened: !this.state.opened})
    }

    render() {
        let { windmill, mode } = this.props
        return (
            <React.Fragment>
                <tr onClick={mode !== 'add' ? this.clickHandler : null}>
                    {mode === 'add' &&
                    <td className={'checkbox'}>
                        <FormCheckbox />
                    </td>}
                    <td className={'td-right'}>{windmill.titleUa}</td>
                    <td>{windmill.bladesCount}</td>
                    <td>{windmill.bladesLength}</td>
                    <td>{windmill.startSpeed} м/с</td>
                    <td>{windmill.nominalSpeed} м/с</td>
                    <td className={'td-left'}>{windmill.nominalVoltage} В</td>
                    {mode === 'view' &&
                    <td className={'checkbox'}>
                        <FormButton className={'btn cancel'}>
                            <i className={'fa fa-times'}/>
                        </FormButton>
                    </td>}
                </tr>
                { this.state.opened && mode !== 'add' &&
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