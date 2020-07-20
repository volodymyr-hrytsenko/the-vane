import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getAllWindmills, getWindmillsByUser} from "../../redux/actions/windmillActions";
import WindmillItem from "../windmill_item/windmillItem";
import {CircleLoader} from "react-spinners";
import '../../css/table.css'
import Notification from "../notification/notification";
import {setTitleType} from "../../redux/actions/titleActions";

class AppContentWindmills extends Component {
    componentDidMount() {
        this.props.setTitleType('windmill')
        if(this.props.mode === "add") {
            this.props.getAllWindmills()
        } else {
            this.props.getWindmillsByUser()
        }
    }

    render() {
        let comp;
        let curWindmills = this.props.mode === "add" ? this.props.allWindmills : this.props.windmills
        let err = this.props.mode === "add" ? this.props.allWindmillsError : this.props.error
        if(this.props.windmillsIsPending) {
            comp = <CircleLoader/>
        } else if(err) {
            comp = <Notification type={'error'}>{err.message}</Notification>
        } else {
            comp =(<table className={'windmills-list'}>
                <thead>
                <tr>
                    { this.props.mode === 'add' && <th></th>}
                    <th>Назва</th>
                    <th>Кількість лез</th>
                    <th>Довжина лез</th>
                    <th>Початкова швидкість</th>
                    <th>Номінальна швидкість</th>
                    <th>Номінальна напруга</th>
                    { this.props.mode === 'view' && <th></th>}
                </tr>
                </thead>

                <tbody>
                {curWindmills.map((windmill, ind) => {
                    return (
                        <WindmillItem
                            key={ind}
                            mode={this.props.mode}
                            windmill={windmill}
                        />
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
        allWindmills: state.windmillsReducer.allWindmills,
        error: state.windmillsReducer.windmillsError,
        allWindmillsError: state.windmillsReducer.allWindmillsError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWindmillsByUser: bindActionCreators(getWindmillsByUser, dispatch),
        getAllWindmills: bindActionCreators(getAllWindmills, dispatch),
        setTitleType: bindActionCreators(setTitleType, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentWindmills);