import React, {useState} from "react";
import s from './Post.module.css';
import Avatar from "../Avatar/Avatar";

const Post = ({message}) => {
    const [like, setLike] = useState(0);

    const addLike = () => {
        setLike(like + 1)
    };
    return (
        <div className={s.item}>
            <Avatar/>
            {message}
            <div>
                    <span>
                        <a onClick={addLike}> {like} <i className="fas fa-heart"></i></a>
                    </span>
            </div>
        </div>
    )
};

export default Post;