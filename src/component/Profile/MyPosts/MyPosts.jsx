import React, {useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' countLike={15}/>
                <Post message="It's my first post!" countLike={15}/>
            </div>
        </div>
    )
};

export default MyPosts;