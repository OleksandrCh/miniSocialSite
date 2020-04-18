import React, {useState} from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import Avatar from "../../common/Avatar/Avatar";

const DialogItem = ({name, id}) => {
    const [active, setActive] = useState(false);
    return (
            <NavLink
                onClick={()=> setActive(!active)}
                className={`${s.dialog} ${active && s.active}`} to={`/dialogs/${id}`}
            >
                <Avatar/>
                <span>{name}</span>
            </NavLink>
    )
};

export default DialogItem;