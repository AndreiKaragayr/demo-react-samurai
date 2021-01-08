import React from 'react';
import authReducer, {setAuthUserData} from "./auth-reducer";

const state = {
  'userId': null,
  'email': null,
  'login': null,
  'isAuth': true,
  'isLoading': false,
};

it('User id should be increment', () => {
  let action = setAuthUserData(
    123,
    'test@gmail.com',
    'Name',
    true
  );

  let newState = authReducer(state, action);

  expect(newState.userId).toBe(123)
})

it('User email should be increment', () => {
  let action = setAuthUserData(
    123,
    'test@gmail.com',
    'Name',
    true
  );

  let newState = authReducer(state, action);

  expect(newState.email).toBe('test@gmail.com');
})

it('User login should be increment', () => {
  let action = setAuthUserData(
    123,
    'test@gmail.com',
    'Name',
    true
  );

  let newState = authReducer(state, action);

  expect(newState.login).toBe('Name');
})

