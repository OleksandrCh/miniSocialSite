import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

export let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: 'Hi, how are you?', likeCount: 0},
                {id: 2, post: 'It\'s my first post!', likeCount: 0},
                {id: 3, post: 'Good by!', likeCount: 0},
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
            newMessageText: '',
        },
        sidebar: []
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        store._renderState(this._state)
    }
};

