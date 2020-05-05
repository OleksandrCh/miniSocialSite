import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let {dialogsPage, onSendMessage} = props;
    let {dialogsData, messageData,} = dialogsPage;

    const addNewMessage = (values) => {
        onSendMessage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsBlock}>
                {dialogsData.map(data => <DialogItem key={data.id} name={data.name} id={data.id}/>)}
            </div>
            <div className={s.messagesBlock}>
                {messageData.map(data => <Message key={data.id} message={data.message} id={data.id}/>)}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};


export default Dialogs;
