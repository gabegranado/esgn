import * as api from '../api/index.js';

export const getSubscribed  = (userID) => async (dispatch) => {
    try {
        const { data } = await api.getSubscribed(userID);
        console.log('getSubscribed payload', data);
        dispatch({ type: 'GET_ALL_SUBSCRIBED', payload: data });
      } catch (error) {
        console.log(error.message);
      }
}