import React, {useState} from "react";
import s from './Post.module.css';

const Post = ({message}) => {
    const [like, setLike] = useState(0);

    const addLike = () => {
        setLike(like + 1)
    };
    return (
        <div className={s.item}>
            <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'/>
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