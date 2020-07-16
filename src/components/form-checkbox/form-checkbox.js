import React, {Component} from 'react';
import './form-checkbox.css'

class FormCheckbox extends Component {
    constructor() {
        super()
        this.state = {checked: false}
    }

    clickHandler = (e) => {
        this.setState({checked: !this.state.checked})
    }

    render() {
        return (
            <div className={`form-checkbox ${this.state.checked ? 'checked' : ''}`}
                 onClick={this.clickHandler}
            >
                {this.state.checked && <i className="fa fa-check" />}
            </div>
        );
    }
}

export default FormCheckbox;