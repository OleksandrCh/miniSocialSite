import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
};

const Message = ({message}) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    )
};

function Dialogs(props) {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimuch'} id={'1'}/>
                <DialogItem name={'Andrei'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Sasha'} id={'4'}/>
                <DialogItem name={'Viktor'} id={'5'}/>
                <DialogItem name={'Valera'} id={'6'}/>
            </div>
            <div className={s.messagesItems}>
                <Message message={'Hi how are you?'}/>
                <Message message={'Were are you from?'}/>
                <Message message={'Hi how are you?'}/>
                <Message message={'By!'}/>
            </div>
        </div>
    );
}

export default Dialogs;