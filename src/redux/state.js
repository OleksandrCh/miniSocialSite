import {renderState} from "../render";


export let state = {
    profilePage: {
        postData: [
            {id: 1,post: 'Hi, how are you?'},
            {id: 2,post: 'It\'s my first post!'},
            {id: 3,post: 'Good by!'},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Dimuch'},
            {id: 2, name: 'Andrei'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messageData: [
            {id: 1, message: 'Hi how are you?'},
            {id: 2, message: 'Were are you from?'},
            {id: 3, message: 'Hi how are you?'},
            {id: 4, message: 'By!'},
            {id: 5, message: 'Yo!'}
        ],
    }
};

export const addPost = (post) => {
    let nextId = state.profilePage.postData[state.profilePage.postData.length-1].id + 1
    let newPost =  {id: nextId, post: post};
    state.profilePage.postData.push(newPost);
    renderState(state);
};
export const updateNewPostText = (newText) => {
    // let nextId = state.profilePage.postData[state.profilePage.postData.length-1].id + 1
    // let newPost =  {id: nextId, post: post};
    state.profilePage.newPostText = newText;
    renderState(state);
    console.log(state.profilePage.newPostText)
};