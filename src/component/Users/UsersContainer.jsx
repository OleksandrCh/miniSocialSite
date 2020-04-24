import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    getUsers,
} from '../../redux/usersReduser'
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    };

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    };

    render() {
        const {users, unFollow, follow, totalUsersCount, pageSize, currentPage, followingInProgress,} = this.props;
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                users={users}
                unFollow={unFollow}
                follow={follow}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                followingInProgress={followingInProgress}
            />
        </>

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

// Можно заменить на обьект с actions. Connect под капотом автоматически обернёт их в функцию.
// И если в неё приходят параметры он прокидывает их в action
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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        getUsers
    })
)(UsersContainer)
