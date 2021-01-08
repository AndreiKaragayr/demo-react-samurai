import {authAPI} from "../api/api";
import {stopSubmit} from 'redux-form';

const USER_TYPE = {
  SET_USER: {
    REQUEST: 'SET_USER_REQUEST',
    SUCCESS: 'SET_USER_SUCCESS',
    FAILURE: 'SET_USER_FAILURE',
  }
}

const TOGGLE_TYPE = {
  TOGGLE_IS: {
    REQUEST: 'TOGGLE_IS_REQUEST',
    SUCCESS: 'TOGGLE_IS_SUCCESS',
    FAILURE: 'TOGGLE_IS_FAILURE',
  }
}

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case USER_TYPE.SET_USER.SUCCESS:
      return {
        ...state,
        ...action.payload
      };
      default:
      return state;
  }
};

export const toggleIsLoading = (isLoading) => ({type: TOGGLE_TYPE.TOGGLE_IS.SUCCESS, isLoading});

export let setAuthUserData = (userId, email, login, isAuth) => ({
  type: USER_TYPE.SET_USER.SUCCESS,
  payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me()
  if( response.data.resultCode === 0 ){
    let {id, email, login} = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  toggleIsLoading(true);
  let response = await authAPI.login(email, password, rememberMe)
  if( response.data.resultCode === 0 ){
    toggleIsLoading(false);
    dispatch(getAuthUserData());
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error';
    dispatch(stopSubmit("login", {_error: message}));
  }
}

export const loginOut = () => async (dispatch) => {
  let response = await authAPI.loginOut()
  if( response.data.resultCode === 0 ){
    dispatch(setAuthUserData(null,null,null,false))
  }
}

export default authReducer
