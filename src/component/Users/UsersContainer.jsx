import React from 'react';
import {connect} from "react-redux";
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,toggleIsFetching} from '../../redux/usersReduser'
import * as axios from "axios";
import Users from "./Users";
import preloader from '../../assets/Spinner-1s-200px.svg'
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            })
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
        this.props.setCurrentPage(p);
    };

    render() {
        const {users,unfollow,follow,totalUsersCount,pageSize,currentPage} = this.props;
        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users
            onPageChanged={this.onPageChanged}
            users={users}
            unfollow={unfollow}
            follow={follow}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}/>
        </>

    }
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
    };
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (TotalUsersCount) => {
//             dispatch(setTotalUsersCountAC(TotalUsersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             console.log(isFetching);
//             dispatch(isFetchingAC(isFetching))
//         }
//     }
// };

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)