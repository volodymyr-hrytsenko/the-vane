import React, {Component} from 'react';
import { withRouter } from "react-router";
import './redirect-link.css'

class RedirectLink extends Component {

    handlerCreator = (link)  => {
        this.props.history.push(link)
    };

    render() {
        return (
            <span className={'redirect-link'}
                  onClick={() => this.handlerCreator(this.props.link)}
            >
                {this.props.children}
            </span>
        );
    }
}

export default withRouter(RedirectLink);