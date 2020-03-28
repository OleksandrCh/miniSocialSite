import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={`${s.imgWidth} `} src='https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>
        </div>
    )
};

export default ProfileInfo;