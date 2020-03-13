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

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dimuch'},
        {id: 2, name: 'Andrei'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ];
    let messageData = [
        {id: 1,message:'Hi how are you?'},
        {id: 2,message:'Were are you from?'},
        {id: 3,message:'Hi how are you?'},
        {id: 4,message:'By!'},
        {id: 5,message:'Yo!'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(data => <DialogItem name={data.name} id={data.id}/>)}
            </div>
            <div className={s.messagesItems}>
                {messageData.map(data =>  <Message message={data.message} id={data.id}/>)}
            </div>
        </div>
    );
}

export default Dialogs;