const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
        //     followed: false,
        //     fullName: 'Dmitry',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
        //     followed: false,
        //     fullName: 'Sasha',
        //     status: 'I am a boss too',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
        //     followed: true,
        //     fullName: 'Andrey',
        //     status: 'I am not a boss',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
        //     followed: false,
        //     fullName: 'Nikolay',
        //     status: 'I am a cat',
        //     location: {city: 'Berlin', country: 'Germany'}
        // },
    ],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user, index) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            };
        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: CURRENT_PAGE, currentPage});

export default usersReducer;