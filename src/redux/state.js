const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE',
    UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export let store = {
    _state: {
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
    },
    _renderState() {
        console.log('State change')
    },

    subscribe(observer) {
        this._renderState = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        //MyPost Function
        if (action.type === ADD_POST) {
            let nextId = this._state.profilePage.postData[this._state.profilePage.postData.length - 1].id + 1;
            let newPost = {id: nextId, post: this._state.profilePage.newPostText};
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._renderState(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._renderState(this._state);
        }
        //Dialogs Function

        else if (action.type === ADD_NEW_MESSAGE) {
            let nextId = this._state.dialogsPage.messageData[this._state.dialogsPage.messageData.length - 1].id + 1;
            const newMessage = {id: nextId, message: this._state.dialogsPage.newMessage};
            this._state.dialogsPage.messageData.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._renderState(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessage = action.newText;
            this._renderState(this._state);
        }
    }
};


export const addPostActionCreator = () => {
    return {type: ADD_POST}
};
export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};

export const addMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text});