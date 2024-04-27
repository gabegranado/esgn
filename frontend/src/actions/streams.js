import * as api from '../api/index.js';

export const getStreams  = () => async (dispatch) => {
    try {
        const { data } = await api.getStreams();
        console.log('streams payload', data);
        dispatch({ type: 'GET_ALL_STREAMS', payload: data });
      } catch (error) {
        console.log(error.message);
      }
}