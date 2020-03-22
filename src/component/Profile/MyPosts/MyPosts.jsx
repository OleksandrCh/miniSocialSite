import React, {useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({profilePage, addPost,updateNewPostText}) => {

    let newPostElement = React.createRef();

    const addNewPost = () => {
        addPost();
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={profilePage.newPostText} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {profilePage.postData.map(post => <Post key={post.id} id={post.id} message={post.post}/>)}
            </div>
        </div>
    )
};

export default MyPosts;