import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogsData, messageData}) => {
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