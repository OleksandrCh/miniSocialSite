import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs.jsx";
import {BrowserRouter, Route} from "react-router-dom";

const App = ({postData,dialogsData,messageData}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={()=><Profile postData={postData}/>}/>
                    <Route exact path='/dialogs' render={()=><Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>
                    <Route exact path='/news' component={Dialogs}/>
                    <Route exact path='/music' component={Dialogs}/>
                    <Route exact path='/settings' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
