import * as api from '../api/index.js';

export const getArticles  = () => async (dispatch) => {
    try {
        const { data } = await api.getArticles();
        console.log('streams payload', data);
        dispatch({ type: 'GET_ALL_HEADLINES', payload: data });
      } catch (error) {
        console.log(error.message);
      }
}