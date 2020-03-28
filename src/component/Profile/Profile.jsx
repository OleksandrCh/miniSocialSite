import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = ({state, dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={dispatch} state={state}/>
        </div>
    )
};

export default Profile;