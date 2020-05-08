import {loginAPI} from "../api/api";

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
            console.log(state)
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};

export const setAuthUserDataAC = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth}
});

export const getAuthUserDataAC = () => (dispatch) => {
    loginAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {login, id, email} = data.data;
                dispatch(setAuthUserDataAC(id, email, login, true));
            }
        });
};

export const loginUser = (email, password, rememberMe) => (dispatch) => {
    loginAPI.logIn(email, password, rememberMe)
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(getAuthUserDataAC());
            }
        });
};

export const logoutUser = () => (dispatch) => {
    loginAPI.logOut()
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false));
            }
        });
};

export default authReducer;
