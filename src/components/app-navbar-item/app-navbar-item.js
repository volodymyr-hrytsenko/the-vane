import React from 'react';
import './app-navbar-item.css'

const AppNavbarItem = ({ico, label, state}) => {
    return(
        <div>
            <i className={ico + ' nav-icon'}/>
            <label className={`link ${state ? '' : 'hidden'}`}>{label}</label>
        </div>
    );
}

export default AppNavbarItem;