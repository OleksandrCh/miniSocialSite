import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs.jsx";
import {BrowserRouter, Route} from "react-router-dom";

const App = ({state:{profilePage,dialogsPage}}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={()=><Profile postData={profilePage.postData}/>}/>
                    <Route exact path='/dialogs' render={()=><Dialogs dialogsData={dialogsPage.dialogsData} messageData={dialogsPage.messageData}/>}/>
                    {/*<Route exact path='/news' render={()=><News/>}/>*/}
                    {/*<Route exact path='/music' render={()=><Music/>}/>*/}
                    {/*<Route exact path='/settings' render={()=><Settings/>}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
