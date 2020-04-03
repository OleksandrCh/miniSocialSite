import React from 'react';
import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from '../../redux/usersReduser'
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
            })
    }

    onPageChanged = (p) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
        this.props.setCurrentPage(p);
    };

    render() {
        const {users,unfollow,follow,totalUsersCount,pageSize,currentPage} = this.props;
        return <Users
            onPageChanged={this.onPageChanged}
            users={users}
            unfollow={unfollow}
            follow={follow}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}/>
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (TotalUsersCount) => {
            dispatch(setTotalUsersCountAC(TotalUsersCount))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);