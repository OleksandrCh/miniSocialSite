import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./component/News/News";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";

const App = () => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={()=><Profile />}/>
                    <Route exact path='/dialogs' render={()=><DialogsContainer />}/>
                    <Route exact path='/users' render={()=><UsersContainer />}/>
                    <Route exact path='/news' render={()=><News/>}/>
                    {/*<Route exact path='/music' render={()=><Music/>}/>*/}
                    {/*<Route exact path='/settings' render={()=><Settings/>}/>*/}
                </div>
            </div>
    );
};

export default App;
