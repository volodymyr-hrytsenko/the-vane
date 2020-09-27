import React, {Component} from 'react';
import './appContentCard.css'

class AppContentCard extends Component {
    render() {
        return (
            <div className={`content-card ${this.props.color}`}>
                <div>
                    {this.props.icon}
                </div>
                <div className={'card-content'}>
                    <span className={'card-title'}>{this.props.title}:</span>
                    <span className={'card-amount'}> {this.props.amount}</span>
                </div>
            </div>
        );
    }
}

export default AppContentCard;