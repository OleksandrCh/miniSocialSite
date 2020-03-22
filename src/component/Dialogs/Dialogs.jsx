import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogsData, messageData}) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsBlock}>
                {dialogsData.map(data => <DialogItem name={data.name} id={data.id}/>)}
            </div>
            <div className={s.messagesBlock}>
                {messageData.map(data =>  <Message message={data.message} id={data.id}/>)}
                <div>
                    <textarea></textarea>
                    <button>Add Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;