import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'/>
            {props.message}
            <div>
                    <span>
                        <a > {props.countLike} <i className="fas fa-heart"></i></a>
                    </span>
            </div>
        </div>
    )
};

export default Post;