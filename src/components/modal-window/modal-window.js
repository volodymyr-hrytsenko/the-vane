import React, {Component} from 'react';
import './modal-window.css'

class ModalWindow extends Component {
    render() {
        return (
            <div className={'modal-background'}>
                <div className={'modal-window'}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ModalWindow;