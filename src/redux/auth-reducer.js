const SET_AUTH_USER_DATA = 'FOLLOW';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
};

export const setAuthUserDataAC = (userId,email,login) => ({type: SET_AUTH_USER_DATA,data: {userId,email,login}});

export default authReducer;
