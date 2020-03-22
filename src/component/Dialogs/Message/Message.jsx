import React from 'react';
import s from './Message.module.css';

const Message = ({message, id}) => {
    return (
        <div className={s.message}>
            <div>{message}</div>
        </div>
    )
};


export default Message;