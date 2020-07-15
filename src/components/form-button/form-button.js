import React, {Component} from 'react';
import './form-button.css'

class FormButton extends Component {
    render() {
        return (
            <button className={'form-button'}
                    type={this.props.type}
            >
                {this.props.children}
            </button>
        );
    }
}

export default FormButton;