import React from 'react';
import {connect} from "react-redux";
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,toggleIsFetching} from '../../redux/usersReduser'
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            })
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true);

            usersAPI.getUsers(p, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
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
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)
