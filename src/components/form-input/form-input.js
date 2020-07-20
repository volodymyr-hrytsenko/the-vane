import React, {Component} from 'react';
import './form-input.css'

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dirty: false
        }
    }

    blurHandler = ()=> {
        this.setState({
            dirty: true
        })
    };

    render() {
        let {type, placeholder, value, handler, name, validate = []} = this.props;
        let errors = validate.map(validate => validate(value)).filter(err => err != null);

        return (
            <React.Fragment>
                <input className={`form-input ${errors.length && this.state.dirty ? 'err' : ''}`}
                       type={type}
                       value={value}
                       placeholder={placeholder}
                       onChange={handler}
                       onBlur={this.blurHandler}
                       name={name}
                />
                {errors.length > 0 && this.state.dirty && errors.map((err, index) => {
                    return (<span key={index} className={"error-text"}>{ err }</span>)
                })}
            </React.Fragment>
        );
    }
}

export default FormInput;