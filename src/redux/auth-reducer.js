import {profileAPI} from "../api/api";

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
export const getAuthUserDataAC = () => (dispatch) => {
     profileAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {login, id, email} = response.data.data;
                dispatch(setAuthUserDataAC(id, email, login));
            }
        });
};

export default authReducer;
