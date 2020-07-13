import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getWindmillsByUser} from "../../redux/actions/windmillActions";
import WindmillItem from "../windmill_item/windmillItem";
import './appContentWindmills.css'

class AppContentWindmills extends Component {
    componentDidMount() {
        this.props.getWindmillsByUser()
    }

    render() {
        let comp = this.props.windmills.length ? (<table className={'windmills-list'}>
            <thead>
                <tr>
                    <th>Назва</th>
                    <th>Кількість лез</th>
                    <th>Довжина лез</th>
                    <th>Початкова швидкість</th>
                    <th>Номінальна швидкість</th>
                    <th>Номінальна напруга</th>
                </tr>
            </thead>

            <tbody>
                {this.props.windmills.map((windmill, ind) => {
                    return (
                        <WindmillItem key={ind} windmill={windmill}/>
                    )
                })}
            </tbody>
        </table>) : null
        return comp
    }
}

const mapStateToProps = (state) => {
    return {
        windmillsIsPending: state.windmillsReducer.windmillsIsPending,
        windmills: state.windmillsReducer.windmills
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWindmillsByUser: bindActionCreators(getWindmillsByUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentWindmills);