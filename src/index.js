import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/reduxStore";

const renderState = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App dispatch={store.dispatch.bind(store)} state={state}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderState(store.getState());

store.subscribe(() =>{
    let state = store.getState();
    renderState(state);
});

serviceWorker.unregister();
