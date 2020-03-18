import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {post: 'Hi, how are you?'},
    {post: 'It\'s my first post!'}
];
let dialogsData = [
    {id: 1, name: 'Dimuch'},
    {id: 2, name: 'Andrei'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
];
let messageData = [
    {id: 1, message: 'Hi how are you?'},
    {id: 2, message: 'Were are you from?'},
    {id: 3, message: 'Hi how are you?'},
    {id: 4, message: 'By!'},
    {id: 5, message: 'Yo!'}
];

ReactDOM.render(<App
    postData={postData}
    dialogsData={dialogsData}
    messageData={messageData}
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
