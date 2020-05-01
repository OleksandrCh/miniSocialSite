import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let {dialogsPage, updateNewMessageBody, onSendMessage} = props;
    let {dialogsData, messageData, newMessageText} = dialogsPage;

    const onSendMessageClick = () => {
        onSendMessage();
    };
    const onNewMessageChange = (e) => {
        const body = e.target.value;
        updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsBlock}>
                {dialogsData.map(data => <DialogItem key={data.id} name={data.name} id={data.id}/>)}
            </div>
            <div className={s.messagesBlock}>
                {messageData.map(data => <Message key={data.id} message={data.message} id={data.id}/>)}
                <div>
                    <div><textarea placeholder='Enter your message' value={newMessageText} onChange={onNewMessageChange}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
