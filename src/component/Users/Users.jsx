import React from 'react';
import Avatar from "../Profile/MyPosts/Avatar/Avatar";
import s from './Users.module.css'
import * as axios from 'axios'

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

    }

    componentDidMount() {
        // if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    console.log('componentDidMount');
                    console.log(response);
                    this.props.setUsers(response.data.items)
                })
        // }
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div className={s.users}>
                <div>
                    {pages.map(p => <span
                        onClick={()=>{ this.props.setCurrentPage(p) }}
                        className={this.props.currentPage === p && s.selectedPage}
                    >{p}</span>)}
                </div>
                {
                    this.props.users.length === 0 ? <div>Loading...</div>
                        :
                        this.props.users.map((user) => {
                            return (
                                <div className={s.user} key={user.id}>
                                    <span>
                                        <div>
                                            {/*<img src={user.}/>*/}
                                            <Avatar/>
                                        </div>
                                        <div>
                                           {user.followed ?
                                               <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                               : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
            </div>
        )
    }


    ;
};

export default Users;