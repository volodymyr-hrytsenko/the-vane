import React, {Component} from 'react';
import './form-button.css'

class FormButton extends Component {
    render() {
        return (
            <button type={this.props.type}
                    {...this.props}
            >
                {this.props.children}
            </button>
        );
    }
}

export default FormButton;