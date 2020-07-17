import React, {Component} from 'react';
import './form-checkbox.css'
import {bindActionCreators} from "redux";
import {addWindmillToTemporary, deleteWindmillFromTemporary} from "../../redux/actions/windmillTempAction";
import {connect} from "react-redux";

class FormCheckbox extends Component {
    constructor(props) {
        super(props)
        this.state = {checked: false}
    }

    clickHandler = (e) => {
        this.setState({checked: !this.state.checked}, () => {
            if(this.state.checked === true) {
                this.props.addWindmillToTemporary(this.props.windmill)
            } else {
                this.props.deleteWindmillFromTemporary(this.props.windmill.id)
            }
        })
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

const mapDispatchToProps = (dispatch) => {
    return {
        addWindmillToTemporary: bindActionCreators(addWindmillToTemporary, dispatch),
        deleteWindmillFromTemporary: bindActionCreators(deleteWindmillFromTemporary, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(FormCheckbox);