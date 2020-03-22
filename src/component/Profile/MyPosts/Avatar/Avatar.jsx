import React from 'react';
import s from './Avatar.module.css'
function Avatar(props) {
    return (
        <div>
            <img className={s.avatar} src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'/>
        </div>
    );
}

export default Avatar;