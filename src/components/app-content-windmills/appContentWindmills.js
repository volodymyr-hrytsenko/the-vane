import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getWindmillsByUser} from "../../redux/actions/windmillActions";
import WindmillItem from "../windmill_item/windmillItem";
import {CircleLoader} from "react-spinners";
import './appContentWindmills.css'
import Notification from "../notification/notification";
import {setTitleType} from "../../redux/actions/titleActions";

class AppContentWindmills extends Component {
    componentDidMount() {
        this.props.setTitleType('windmill')
        this.props.getWindmillsByUser()
    }

    render() {
        let comp;
        console.log(this.props.err)
        if(this.props.windmillsIsPending) {
            comp = <CircleLoader/>
        } else if(this.props.error) {
            comp = <Notification type={'error'}>{this.props.error.message}</Notification>
        } else {
            comp =(<table className={'windmills-list'}>
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
            </table>)
        }
        return comp
    }
}

const mapStateToProps = (state) => {
    return {
        windmillsIsPending: state.windmillsReducer.windmillsIsPending,
        windmills: state.windmillsReducer.windmills,
        error: state.windmillsReducer.windmillsError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWindmillsByUser: bindActionCreators(getWindmillsByUser, dispatch),
        setTitleType: bindActionCreators(setTitleType, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentWindmills);