import React, {useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

const MyPosts = ({state, dispatch}) => {
    let {profilePage:{postData,newPostText}} = state;
    console.log(newPostText);
    let newPostElement = React.createRef();

    const addNewPost = () => {
        dispatch(addPostActionCreator())
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        dispatch(updateNewPostActionCreator(text));
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={newPostText} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postData.map(post => <Post key={post.id} id={post.id} message={post.post}/>)}
            </div>
        </div>
    )
};

export default MyPosts;