import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let {profilePage, addPost} = props;
    let {postData} = profilePage;
    const addNewPost = (values) => {
        addPost(values.myNewPost)
    };
    // const onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     updateNewPostText(text);
    // };


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddMyPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postData.map(post => <Post key={post.id} id={post.id} post={post.post}/>)}
            </div>
        </div>
    )
};

const maxLengthValidator10 =  maxLengthValidator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter your post' name={'myNewPost'}  TypeField={'textarea'} component={Textarea} validate={[required, maxLengthValidator10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
};

const AddMyPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
