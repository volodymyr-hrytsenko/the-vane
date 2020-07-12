import React, {Component} from 'react';
import './appContentCard.css'

class AppContentCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'content-card'}>
                <div>
                    <img className={'card-img'}
                         src={'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg'}
                    />
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