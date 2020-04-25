import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        {id: 1, post: 'Hi, how are you?', likeCount: 0},
        {id: 2, post: 'It\'s my first post!', likeCount: 0},
        {id: 3, post: 'Good by!', likeCount: 0},
    ],
    newPostText: '',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    // let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADD_POST:
            let nextId = state.postData[state.postData.length - 1].id + 1;
            return {
                ...state,
                postData: [...state.postData, {id: nextId, post: state.newPostText, likeCount: 0}],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            // newState.newPostText = action.newText;
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfileOfId(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data));
        });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.putStatus(status)
        .then(response => {
            console.log("updateStatus: ", response)
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(response.data));
            }
        })
};

export default profileReducer;
