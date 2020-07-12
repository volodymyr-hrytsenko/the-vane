import React from 'react';

const AppNavbarItem = ({ico, label}) => {
    return(
        <div>
            <i className={ico}></i>
            <label>{label}</label>
        </div>
    );
}

export default AppNavbarItem;