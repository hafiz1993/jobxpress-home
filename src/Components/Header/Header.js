import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar/>
            <HeaderMain/>
        </div>
    );
};

export default Header;