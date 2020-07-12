import React from 'react';

import AppHeaderMenu from '../app-header-menu';
import AppHeaderLogo from '../app-header-logo';

import './app-header.css';

const AppHeader = () => {
    return(
        <div className="header">
            <AppHeaderLogo/>
            <AppHeaderMenu/>
        </div>
    );
}

export default AppHeader;