import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const renderState = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App dispatch={store.dispatch.bind(store)} state={state}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderState(store.getState());

store.subscribe(renderState);

serviceWorker.unregister();
