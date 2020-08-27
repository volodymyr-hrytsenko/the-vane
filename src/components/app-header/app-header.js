import React from 'react';

import AppHeaderMenu from '../app-header-menu';

import './app-header.css';

const AppHeader = () => {
    return(
        <div className="header">
            <AppHeaderMenu/>
        </div>
    );
}

export default AppHeader;