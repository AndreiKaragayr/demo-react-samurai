import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch(action.type){
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializedApp = () => dispatch => {
  let promise = dispatch(getAuthUserData());

  // let promise2 = dispatch(someThingElse());
  // let promise3 = dispatch(someThingElse());

  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess())
    });
}

export default appReducer;
