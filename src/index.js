import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addNewMessage, addPost, updateNewMessage, updateNewPostText, state, subscribe} from "./redux/state";

const renderState = () => {
    ReactDOM.render(
        <App
            state={state}
            updateNewPostText={updateNewPostText}
            addNewMessage={addNewMessage} updateNewMessage={updateNewMessage}
            addPost={addPost}
        />,
        document.getElementById('root'));
};

renderState();

subscribe(renderState);

serviceWorker.unregister();
