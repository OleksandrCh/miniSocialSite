import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";

const Dialogs = ({state: {dialogsPage: {dialogsData, messageData, newMessage}}, dispatch}) => {
    let newMessageElement = React.createRef();

    const addMessage = () => {
        dispatch(addMessageActionCreator())
    };
    const messageOnChange = () => {
        const text = newMessageElement.current.value;
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
                    <textarea ref={newMessageElement} value={newMessage} onChange={messageOnChange}/>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;