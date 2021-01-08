import {profileAPI, usersAPI as userAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
  'posts': [
    {'id': 1, 'message': "Hi, how are you", 'like': 1,},
    {'id': 2, 'message': "It`s mt first post", 'like': 23}
  ],
  'profile': null,
  'status': ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        "id": 3,
        "message": action.newPostBody,
        "like": 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      };
    default:
      return state
  }
};

export let addPostActionCreator = (newPostBody) => ({
  type: ADD_POST,
  newPostBody
});

export let setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

export let setStatus = (status) => ({
  type: SET_STATUS,
  status
});

export let deletePost = (postId) => ({
  type: DELETE_POST,
  postId
})

export let getUserProfile = (userId) => async (dispatch) => {
  let response = await userAPI.getProfile(userId)
  dispatch(setUserProfile(response.data));
};

export let getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export let updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export default profileReducer
