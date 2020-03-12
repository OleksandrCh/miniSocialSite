import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img} src='https://pinster.ru/cache/bd4c23c1/avf800915e4ef4bbda93c.jpeg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>
        </div>
    )
};

export default ProfileInfo;