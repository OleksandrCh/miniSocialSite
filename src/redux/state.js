let renderState;

export const subscribe = (observer) =>{
    renderState = observer;
};

export let state = {
    profilePage: {
        postData: [
            {id: 1, post: 'Hi, how are you?'},
            {id: 2, post: 'It\'s my first post!'},
            {id: 3, post: 'Good by!'},
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
        newMessage: '',
    }
};
//MyPost Function
export const addPost = () => {
    let nextId = state.profilePage.postData[state.profilePage.postData.length - 1].id + 1;
    let newPost = {id: nextId, post: state.profilePage.newPostText};
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    renderState(state);
};
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderState(state);
};

//Dialogs Function
export const addNewMessage = () => {
    let nextId = state.dialogsPage.messageData[state.dialogsPage.messageData.length - 1].id + 1;
    const newMessage = {id: nextId, message: state.dialogsPage.newMessage};
    state.dialogsPage.messageData.push(newMessage);
    state.dialogsPage.newMessage = '';
    renderState(state);
};
export const updateNewMessage = (newText) => {
    state.dialogsPage.newMessage = newText;
    renderState(state);
};