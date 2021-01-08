const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

let initialState = {
    'dialogs': [
        {'id': 1, 'name': 'Dimych'},
        {'id': 2, 'name': 'Andrey'},
        {'id': 3, 'name': 'Sveta'},
        {'id': 4, 'name': 'Sasha'},
        {'id': 5, 'name': 'Viktor'},
        {'id': 6, 'name': 'Valera'}
    ],
    'messages': [
        {'id': 1, 'message': "Hi"},
        {'id': 2, 'message': "How are your react"},
        {'id': 3, 'message': "Yo"},
        {'id': 4, 'message': "Lol"}
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_NEW_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {'id': 5,'message': body}]
            };
        default:
            return state
    }
}

export let addMessageCreator = (newMessageBody) => ({
    type: SEND_NEW_MESSAGE,
    newMessageBody
})

export default dialogsReducer