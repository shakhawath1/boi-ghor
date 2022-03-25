import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <h1 className='logo'>BOI GHOR</h1>
            <div className='menu-item'>
                <a href='/'>Home</a>
                <a href='/'>Books</a>
                <a href='/'>Cart</a>
                <a href='/'>About us</a>
            </div>
        </nav>
    );
};

export default Header;