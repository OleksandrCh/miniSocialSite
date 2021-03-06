import React from "react";
import s from './Header.module.css';
import logo from '../../assets/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.logo} src={logo} alt='jsx-a11y/alt-text' />
       <div className={s.loginBlock}>
           {props.isAuth ? <div>{props.login} <button onClick={props.logoutUser} >LogOut</button></div> : <NavLink to={'/login'}>Login</NavLink>}
       </div>
        </header>
    )
};

export default Header;
