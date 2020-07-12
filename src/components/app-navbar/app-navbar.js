import React from 'react';

import AppNavbarItem from '../app-navbar-item'

import './app-navbar.css';

const AppNavbar = () => {

    const list = [
        {id: 'lkja', ico: 'fa fa-user-circle', label: 'Ваш профіль'},
        {id: 'ldfa', ico: 'fa fa-microchip', label: 'Ваші пристрої'},
        {id: 'ljha', ico: 'fa fa-snowflake-o', label: 'Ваші вітрогенератори'},
        {id: 'sgsr', ico: 'fa fa-chevron-left'}
    ];

    const navbarItem = list.map(item => {
        const {id, ...listProps} = item
        return(
            <li key={id}>
                <AppNavbarItem {...listProps}/>
            </li>
        );
    });

    return(
        <ul className="navbar">
            {navbarItem}
        </ul>
    );
}

export default AppNavbar;