import * as api from '../api';

// ACTION CREATORS
export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPosts();
    dispatch({type: 'FETCH_ALL', payload: data})
  }catch(error){
    console.error(error.message)
  }
}