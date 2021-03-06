import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo updateStatus={props.updateStatus} status={props.status} profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
};

export default Profile;
