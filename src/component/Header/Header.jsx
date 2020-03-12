import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img alt='jsx-a11y/alt-text' src='https://cdn.worldvectorlogo.com/logos/puma-logo.svg'></img>
        </header>
    )
};

export default Header;