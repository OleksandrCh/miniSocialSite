import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import {Route} from "react-router-dom";
import News from "./component/News/News";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";

const App = () => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:idUser' render={()=><ProfileContainer />}/>
                    <Route path='/dialogs' render={()=><DialogsContainer />}/>
                    <Route path='/users' render={()=><UsersContainer />}/>
                    <Route path='/news' render={()=><News/>}/>
                    {/*<Route exact path='/music' render={()=><Music/>}/>*/}
                    {/*<Route exact path='/settings' render={()=><Settings/>}/>*/}
                </div>
            </div>
    );
};

export default App;
