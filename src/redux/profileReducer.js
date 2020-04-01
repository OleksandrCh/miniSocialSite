const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, post: 'Hi, how are you?', likeCount: 0},
        {id: 2, post: 'It\'s my first post!', likeCount: 0},
        {id: 3, post: 'Good by!', likeCount: 0},
    ],
    newPostText: ''
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
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;