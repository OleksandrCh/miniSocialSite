import React from 'react';
import './App.css';
import Nav from "./component/Nav/Nav";
import {Route} from "react-router-dom";
import News from "./component/News/News";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";

const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:idUser?' render={()=><ProfileContainer />}/>
                    <Route path='/dialogs' render={()=><DialogsContainer />}/>
                    <Route path='/users' render={()=><UsersContainer />}/>
                    <Route path='/login' render={()=><Login />}/>
                    <Route path='/news' render={()=><News />}/>
                    {/*<Route exact path='/music' render={()=><Music/>}/>*/}
                    {/*<Route exact path='/settings' render={()=><Settings/>}/>*/}
                </div>
            </div>
    );
};

export default App;
