import React from 'react';
import s from './Avatar.module.css'
import userPhoto from '../../../assets/defaultUserPhoto.png'

function Avatar(props) {
    return (
        <div>
            <img className={s.avatar_small} src={userPhoto} alt={'avatar'}/>
        </div>
    );
}

export default Avatar;
