import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
  'posts': [
    {'id': 1, 'message': "Hi, how are you", 'like': 1,},
    {'id': 2, 'message': "It`s mt first post", 'like': 23},
    {'id': 3, 'message': "Bla bla bla", 'like': 7},
    {'id': 4, 'message': "Some Date", 'like': 11}
  ]
};

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('it-kamasutra');

  // 2. action
  let newState = profileReducer(state, action);

  // 3 expectation
  expect(newState.posts.length).toBe(5)
})

it('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator('it-kamasutra');

  // 2. action
  let newState = profileReducer(state, action);

  // 3 expectation
  expect(newState.posts[4].message).toBe("it-kamasutra")
})

it('after deleted length of post should be decrement', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3 expectation
  expect(newState.posts.length).toBe(3)
})

it('after deleted length should not be decrement if id is incorrect', () => {
  // 1. test data
  let action = deletePost(10);

  // 2. action
  let newState = profileReducer(state, action);

  // 3 expectation
  expect(newState.posts.length).toBe(4)
})
