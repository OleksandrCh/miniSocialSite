const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
        dialogsData: [
            {id: 1, name: 'Dimuch'},
            {id: 2, name: 'Andrei'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messageData: [
            {id: 1, message: 'Hi how are you?'},
            {id: 2, message: 'Were are you from?'},
            {id: 3, message: 'Hi how are you?'},
            {id: 4, message: 'By!'},
            {id: 5, message: 'Yo!'},
        ],
        newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    // let newState = JSON.parse(JSON.stringify(state));
    //     {
    //     ...state,
    //     messageData: [...state.messageData],
    // }
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let nextId = state.messageData[state.messageData.length - 1].id + 1;
            return {
                ...state,
                messageData: [...state.messageData, {id: nextId, message: state.newMessageText}],
                newMessageText: '',
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText,
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateNewMessageActionCreator = (newText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText});

export default dialogsReducer;