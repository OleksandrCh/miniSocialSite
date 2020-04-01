import React from 'react';
import Avatar from "../Profile/MyPosts/Avatar/Avatar";
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
                followed: false,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
                followed: true,
                fullName: 'Andrey',
                status: 'I am not a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
                followed: false,
                fullName: 'Nikolay',
                status: 'I am a cat',
                location: {city: 'Berlin', country: 'Germany'}
            },
        ]);
    }
    return (
        <div className={s.users}>
            {
                props.users.map((user) => {
                    return <div className={s.user} key={user.id}>
                    <span>
                        <div>
                            {/*<img src={user.photoUrl}/>*/}
                            <Avatar/>
                        </div>
                        <div>
                           {user.followed ?
                               <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                               : <button onClick={() => props.follow(user.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                    </div>
                })
            }
        </div>
    );
};

export default Users;