import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs.jsx";
import {BrowserRouter, Route} from "react-router-dom";

const App = ({state:{profilePage, dialogsPage}, addPost, updateNewPostText, addNewMessage, updateNewMessage}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={()=><Profile profilePage={profilePage} updateNewPostText={updateNewPostText} addPost={addPost}/>}/>
                    <Route exact path='/dialogs' render={()=><Dialogs dialogsData={dialogsPage.dialogsData} newMessage={dialogsPage.newMessage} messageData={dialogsPage.messageData} updateNewMessage={updateNewMessage} addNewMessage={addNewMessage}/>}/>
                    {/*<Route exact path='/news' render={()=><News/>}/>*/}
                    {/*<Route exact path='/music' render={()=><Music/>}/>*/}
                    {/*<Route exact path='/settings' render={()=><Settings/>}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
