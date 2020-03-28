import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs.jsx";
import {Route} from "react-router-dom";
import News from "./component/News/News";

const App = ({state, dispatch}) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={()=><Profile state={state} dispatch={dispatch}/>}/>
                    <Route exact path='/dialogs' render={()=><Dialogs state={state}  dispatch={dispatch}/>}/>
                    <Route exact path='/news' render={()=><News/>}/>
                    {/*<Route exact path='/music' render={()=><Music/>}/>*/}
                    {/*<Route exact path='/settings' render={()=><Settings/>}/>*/}
                </div>
            </div>
    );
};

export default App;
