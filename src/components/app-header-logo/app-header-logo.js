import React from 'react';

import './app-header-logo.css';
import TheVaneIcon from "../the-vane-icon/the-vane-icon";

const AppHeaderLogo = () => {
    return(
        <div className="logo">
            <TheVaneIcon/>
            <label><span className={'orange-text'}>THE</span> VANE</label>
        </div>
    );
}

export default AppHeaderLogo;