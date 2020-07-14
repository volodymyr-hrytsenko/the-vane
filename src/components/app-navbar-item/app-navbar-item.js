import React from 'react';
import './app-navbar-item.css'

const AppNavbarItem = ({ico, label}) => {
    return(
        <div>
            <i className={ico + ' nav-icon'}></i>
            <label className={'link'}>{label}</label>
        </div>
    );
}

export default AppNavbarItem;