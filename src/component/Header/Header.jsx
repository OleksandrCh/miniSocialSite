import React from "react";
import s from './Header.module.css';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} alt='jsx-a11y/alt-text' src={logo}></img>
        </header>
    )
};

export default Header;