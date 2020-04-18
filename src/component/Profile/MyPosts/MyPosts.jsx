import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let {profilePage,updateNewPostText, addPost} = props;
    let {postData, newPostText} = profilePage;
    let newPostElement = React.createRef();
    const addNewPost = () => {
        addPost()
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
                    <textarea placeholder='Enter your post' ref={newPostElement} value={newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addNewPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postData.map(post => <Post key={post.id} id={post.id} post={post.post}/>)}
            </div>
        </div>
    )
};

export default MyPosts;
