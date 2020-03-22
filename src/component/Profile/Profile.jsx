import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = ({profilePage,addPost,updateNewPostText}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={profilePage} updateNewPostText={updateNewPostText} addPost={addPost}/>
        </div>
    )
};

export default Profile;