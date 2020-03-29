import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";

const Dialogs = ({state: {dialogsPage: {dialogsData, messageData,newMessageText}}, dispatch}) => {

    const onSendMessageClick = () => {
        dispatch(addMessageActionCreator())
    };
    const onNewMessageChange = (e) => {
        const text = e.target.value;
        dispatch(updateNewMessageActionCreator(text));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsBlock}>
                {dialogsData.map(data => <DialogItem name={data.name} id={data.id}/>)}
            </div>
            <div className={s.messagesBlock}>
                {messageData.map(data => <Message message={data.message} id={data.id}/>)}
                <div>
                    <textarea placeholder= 'Enter your message' value={newMessageText} onChange={onNewMessageChange}/>
                    <div><button onClick={onSendMessageClick}>Add Message</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;