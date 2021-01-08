import React from 'react';
import dialogsReducer, {addMessageCreator} from "./dialogs-reducer";

const state = {
    'messages': [
        {'id': 1, 'message': "Hi"},
        {'id': 2, 'message': "How are your react"},
        {'id': 3, 'message': "Yo"},
        {'id': 4, 'message': "Lol"}
    ],
};

it('New message should be increment', () => {
    let action = addMessageCreator('New message');

    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(5)
})

it('message of new dialog should be correct', () => {
    let action = addMessageCreator('New message');

    let newState = dialogsReducer(state, action);

    expect(newState.messages[4].message).toBe('New message')
})
