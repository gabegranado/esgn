import * as api from '../api/index.js';

export const signInAction  = () => async (dispatch) => {
    try {
        dispatch({ type: 'SIGN_IN'});
      } catch (error) {
        console.log(error.message);
      }
}

export const signOutAction  = () => async (dispatch) => {
    try {
        dispatch({ type: 'SIGN_OUT'});
      } catch (error) {
        console.log(error.message);
      }
}