import React, {useState} from "react";
import s from './Post.module.css';
import Avatar from "../../../common/Avatar/Avatar";

const Post = ({post}) => {
    const [likeCount, setLike] = useState(0);

    const addLike = () => {
        setLike(likeCount + 1)
    };
    return (
        <div className={s.item}>
            <Avatar/>
            {post}
            <div>
                    <span>
                        <span onClick={addLike}> {likeCount} like</span>
                    </span>
            </div>
        </div>
    )
};

export default Post;
