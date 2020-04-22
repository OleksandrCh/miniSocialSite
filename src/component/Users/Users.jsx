import React from 'react';
import s from "./Users.module.css";
import Avatar from "../common/Avatar/Avatar";
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


function Users(props) {
    const {users, unFollow, follow, totalUsersCount, pageSize, onPageChanged, currentPage, followingInProgress,} = props;

    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.users}>
            <div>
                {pages.map(p => <span
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p)
                    }}
                    className={currentPage === p ? s.selectedPage : ''}
                > {p} </span>)}
            </div>
            {
                users.length === 0 ? <Preloader/>
                    :
                    users.map((user) => {
                        return (
                            <div className={s.user} key={user.id}>
                                <span>
                                    <div>
                                        <NavLink to={`/profile/${user.id}`}>
                                            {user.photos.small ? <img src={user.photos.small} alt={'user'}/> :
                                                <Avatar/>}
                                        </NavLink>
                                    </div>
                                    <div>
                                       {user.followed ?
                                           <button
                                               disabled={followingInProgress.some(id => id === user.id)}
                                               onClick={() => { unFollow(user.id) }}
                                           >
                                               Unfollow
                                           </button>
                                           :
                                           <button
                                               disabled={followingInProgress.some(id => id === user.id)}
                                               onClick={() => { follow(user.id) }}
                                           >
                                               Follow
                                           </button>}
                                   </div>
                           </span>
                                <span>
                                    <span>
                                        <div>{user.name}</div>
                                        <div>{user.status}</div>
                                    </span>
                                    <span>
                                    <div>{/*user.location.country*/}</div>
                                    <div>{/*user.location.city*/}</div>
                                </span>
                            </span>
                            </div>)
                    })
            }
        </div>);
}

export default Users;
