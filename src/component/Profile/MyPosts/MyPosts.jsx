import React, {useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {post: 'Hi, how are you?'},
        {post: 'It\'s my first post!'}
    ];

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
                {postData.map(post => <Post message={post.post}/>)}
            </div>
        </div>
    )
};

export default MyPosts;