import React, {Component} from 'react';
import './windmillTitle.css'

class WindmillTitle extends Component {
    render() {
        return (
            <React.Fragment>
                <span className={'title'}>Ваші вітряки</span>
                <button className={"add"}>+ Додати</button>
            </React.Fragment>
        );
    }
}

export default WindmillTitle;