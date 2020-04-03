import React from 'react';
import s from "./Users.module.css";
import Avatar from "../Profile/MyPosts/Avatar/Avatar";

function Users(props) {
    const {users, unfollow, follow, totalUsersCount, pageSize, onPageChanged, currentPage} = props;

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
                    className={currentPage === p && s.selectedPage}
                > {p} </span>)}
            </div>
            {
                users.length === 0 ? <div>Loading...</div>
                    :
                    users.map((user) => {
                        return (
                            <div className={s.user} key={user.id}>
                                    <span>
                                        <div>
                                            {user.photos.small ? <img src={user.photos.small}/> :
                                                <Avatar/>}
                                        </div>
                                        <div>
                                           {user.followed ?
                                               <button onClick={() => unfollow(user.id)}>Unfollow</button>
                                               : <button onClick={() => follow(user.id)}>Follow</button>}
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