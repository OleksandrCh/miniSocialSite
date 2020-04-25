import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import catImg from '../../../assets/catImg.jpg'
import Avatar from "../../common/Avatar/Avatar";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img className={`${s.imgWidth} `} src={catImg} alt={'album'}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                {props.profile.photos.large ? <img src={props.profile.photos.large} alt="photoProfile"/> : <Avatar/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.fullName}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;
