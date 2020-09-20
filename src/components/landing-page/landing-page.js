import React, {Component} from 'react';
import './landing-page.css';
import {bindActionCreators} from "redux";
import {setTitleType} from "../../redux/actions/titleActions";
import {connect} from "react-redux";

class LandingPage extends Component {
    componentDidMount() {
        this.props.setTitleType('main-page')
    }

    render() {
        return (
            <main className="landing__page">
                <div className="advertising">
                    <div className="adver_text">
                        <label>Find <span>your</span> wind</label>
                        <div className="wrapper">
                            <p>this system will <span>help</span> you to choose the optimal size windmills for your area</p>
                            <p>Our platform is capable of <span>saving</span> your time and <span>money</span></p>
                            <p>The best wind monitoring</p>
                        </div>
                        <div className="join__button">
                            <a className="btnflip" href="#">
                                <span className="btnflip-item btnflip__front">Приєднатися</span>
                                <span className="btnflip-item btnflip__center"/>
                                <span className="btnflip-item btnflip__back">Натисніть тут</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTitleType: bindActionCreators(setTitleType, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(LandingPage);